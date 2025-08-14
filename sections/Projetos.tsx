import { BlogPost } from "apps/blog/types.ts";
import SideNav from  "../components/ui/SideNav.tsx";
import Card from  "../components/ui/Card.tsx";
import { type FnContext } from "@deco/deco";

export interface Props {
  posts?: BlogPost[] | null;
  config?: {
    /** @title Prefix URL */
    categorySlug?: string;
    removeCategoryFromTags?: string;
  },
  texts?: {
    areas?: string;
    allAreas?: string;
    locations?: string;
    allLocations?: string;
    statuses?: string;
    allStatuses?: string;
    noResults?: string;
  },
  queryString?: string;
}

export const loader = (props: Props, req: Request, _ctx: FnContext) => {
  const url = new URL(req.url);
  const queryString = url.search;
  return {
      ...props,
      queryString,
  };
};

export default function Projetos({
  posts,
  config = { categorySlug: '', removeCategoryFromTags: 'projetos' },
  texts = {
    areas: 'Eixos de atuação',
    allAreas: 'Todos',
    locations: 'Localidade',
    allLocations: 'Todas',
    statuses: 'Status',
    allStatuses: 'Todos',
    noResults: 'Nenhum projeto encontrado. Tente outros filtros.',
  },
  queryString = '',
}: Props) {
  const createNewQueryString = (newParam: { key: string; value: string }) => {
    const currentParams = new URLSearchParams(queryString);
    currentParams.set(newParam.key, newParam.value);
    return currentParams.toString();
  };

        // 1. Create categories array
    const categories = posts?.reduce((acc: any[], post) => {
      post.categories?.forEach((cat) => {
        if (config.removeCategoryFromTags !== cat.slug && !acc.find(item => item.key === cat.name)) {
          const currentParams = new URLSearchParams(queryString);
          const isSelected = currentParams.get('category') === cat.name;
          acc.push({ 
            key: cat.name, 
            label: cat.name,
            url: `?${createNewQueryString({ key: 'category', value: cat.name })}`,
            selected: isSelected
          });
        }
      });
      return acc;
    }, []) || [];

    // Add "All" option at the top of categories
    const currentParams = new URLSearchParams(queryString);
    const hasCategoryFilter = currentParams.has('category');
    let allCategoriesUrl = '';
    if (hasCategoryFilter) {
      const paramsWithoutCategory = new URLSearchParams(queryString);
      paramsWithoutCategory.delete('category');
      allCategoriesUrl = `?${paramsWithoutCategory.toString()}`;
    }
    
    categories.unshift({
      key: 'all',
      label: texts.allAreas,
      url: allCategoriesUrl,
      selected: !hasCategoryFilter
    });

    // 2. Create places array
    const places = posts?.reduce((acc: any[], post) => {
      const place = post.extraProps?.find(item => item.key === "location");
      if (place?.value && !acc.find(item => item.key === place.value)) {
        const currentParams = new URLSearchParams(queryString);
        const isSelected = currentParams.get('location') === place.value;
        acc.push({ 
          key: place.value, 
          label: place.value,
          url: `?${createNewQueryString({ key: 'location', value: place.value })}`,
          selected: isSelected
        });
      }
      return acc;
    }, []) || [];

    // Add "All" option at the top of places
    const hasPlaceFilter = currentParams.has('location');
    let allPlacesUrl = '';
    if (hasPlaceFilter) {
      const paramsWithoutPlace = new URLSearchParams(queryString);
      paramsWithoutPlace.delete('location');
      allPlacesUrl = `?${paramsWithoutPlace.toString()}`;
    }
    
    places.unshift({
      key: 'all',
      label: texts.allLocations,
      url: allPlacesUrl,
      selected: !hasPlaceFilter
    });

      // 3. Create status array
    const statuses = posts?.reduce((acc: any[], post) => {
      const status = post.extraProps?.find(item => item.key === "status");
      if (status?.value && !acc.find(item => item.key === status.value)) {
        const currentParams = new URLSearchParams(queryString);
        const isSelected = currentParams.get('status') === status.value;
        acc.push({ 
          key: status.value, 
          label: status.value,
          url: `?${createNewQueryString({ key: 'status', value: status.value })}`,
          selected: isSelected
        });
      }
      return acc;
    }, []) || [];

    // Add "All" option at the top of statuses
    const hasStatusFilter = currentParams.has('status');
    let allStatusesUrl = '';
    if (hasStatusFilter) {
      const paramsWithoutStatus = new URLSearchParams(queryString);
      paramsWithoutStatus.delete('status');
      allStatusesUrl = `?${paramsWithoutStatus.toString()}`;
    }
    
    statuses.unshift({
      key: 'all',
      label: texts.allStatuses,
      url: allStatusesUrl,
      selected: !hasStatusFilter
    });

  // Create filtered posts based on query string parameters
  const filteredPosts = posts?.filter((post) => {
    const currentParams = new URLSearchParams(queryString);
    const categoryFilter = currentParams.get('category');
    const placeFilter = currentParams.get('location');
    const statusFilter = currentParams.get('status');

    // Check category filter
    if (categoryFilter) {
      const hasCategory = post.categories?.some(cat => cat.name === categoryFilter);
      if (!hasCategory) return false;
    }

    // Check place filter
    if (placeFilter) {
      const place = post.extraProps?.find(item => item.key === "location");
      if (place?.value !== placeFilter) return false;
    }

    // Check status filter
    if (statusFilter) {
      const status = post.extraProps?.find(item => item.key === "status");
      if (status?.value !== statusFilter) return false;
    }

    return true;
  }) || [];

  return (
    <div className="container px-6 md:px-12 flex flex-col lg:flex-row gap-12 md:gap-20 my-6 md:my-12 text-neutral-950">
      <div className="flex flex-col gap-7 flex-none w-56">
        <div className="flex flex-col gap-2">
          <h3 className="text-primary font-bold">{texts.areas}</h3>
          <SideNav links={categories} mobileOrientation="vertical"/>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary font-bold">{texts.locations}</h3>
          <SideNav links={places} mobileOrientation="vertical"/>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary font-bold">{texts.statuses}</h3>
          <SideNav links={statuses} mobileOrientation="vertical"/>
        </div>
      </div>
      
      <div className="flex-auto flex flex-col gap-10 md:mx-4">
        {filteredPosts?.length === 0 && (
          <div className="text-center bg-white p-10 rounded-lg border border-secondary md:mt-6 md:mx-6">
            {texts.noResults}
          </div>
        )}
        {filteredPosts?.map((post) =>  {
          const pDate = post.extraProps?.find(item => item.key === "date");
          const pPlace = post.extraProps?.find(item => item.key === "location");
          const pStatus = post.extraProps?.find(item => item.key === "status");
          const categories = []
          post.categories.map((cat) =>  {
            config.removeCategoryFromTags !== cat.slug ? categories.push(cat.name) : '';
          })

          return (
            <Card
              orientation="horizontal"
              borderColor="primary"
              image={{src: post.image, alt: ''}}
              label={post.title}
              description={post.excerpt}
              descriptionColor="neutral-950"
              url={`/${config.categorySlug}/${post.slug}`}
              tags={categories}
              details={{date: pDate?.value, location: pPlace?.value, status: pStatus?.value}}
            />
          )
        })}
      </div>
    </div>
  );
}
