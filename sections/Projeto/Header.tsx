import { type BlogPost, BlogPostPage } from "apps/blog/types.ts";
import Title from  "../../components/ui/Title.tsx";
import Tag from  "../../components/ui/Tag.tsx";

export interface Props {
  page?: BlogPostPage | null;
  config?: {
    /** @title Prefix URL */
    categorySlug?: string;
  },
}

const DEFAULT_PROPS: BlogPost = {
  title: "Title",
  excerpt: "Excerpt goes here",
  authors: [
    {
      name: "Full name",
      email: "author@lemelab.org",
      avatar: '',
    },
  ],
  categories: [],
  date: "2022-01-01",
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  slug: "blog-post",
  content:
    '<h1>Heading 1</h1><p>This is a paragraph under <strong>Heading 1</strong>. It can contain <em>italic</em> text, <strong>bold</strong> text, and even <code>code snippets</code>.</p><h2>Introduction</h2><p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p><p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p><h2>Heading 2</h2><p>More text can be placed here. This section is under <strong>Heading 2</strong>.</p><h3>Heading 3 with Code Block</h3><p>This is an example of a code block:</p><pre><code>// This is a code block console.log("Hello, World!");</code></pre><h4>Heading 4 with Image</h4><p>Below is an image:</p><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9" alt="Description of Image"><p><strong>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</strong></p><p>Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.</p><blockquote>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</blockquote><p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.<h2>Conclusion</h2><p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p><p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p><p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>',
};

export default function Header({
  page,
  config = { categorySlug: '' },
}: Props) {
  const { title, categories, extraProps } = page?.post || DEFAULT_PROPS;
  const pDate = extraProps?.find(item => item.key === "date");
  const pPlace = extraProps?.find(item => item.key === "place");
  const pStatus = extraProps?.find(item => item.key === "status");
  const catTags = []
  categories.map((cat) =>  {
    config.categorySlug !== cat.slug ? catTags.push(cat.name) : '';
  })

  return (
    <div className="container flex gap-8 md:gap-16 mb-6 md:mb-9">
      <div className="hidden md:block flex-none w-44"/>
      <div className="flex-auto flex flex-col gap-7">
        <Title label={title} serif titleSize="4xl" noClamp />
        <div class="flex flex-wrap gap-3">
          {catTags?.map((tag) => (
            <Tag label={tag}/>
          ))}
          {pDate ? <Tag type="date" label={pDate.value} color="secondary"/> : ''}
          {pPlace ? <Tag type="place" label={pPlace.value} color="secondary"/> : ''}
          {pStatus ? <Tag type="status" label={pStatus.value} color="secondary"/> : ''}
        </div>
      </div>
      <div className="hidden md:block flex-none w-44"/>
    </div>
  );
}
