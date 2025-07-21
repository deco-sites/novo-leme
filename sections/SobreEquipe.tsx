import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";
import SideNav from  "../components/ui/SideNav.tsx";
import type {Props as SideNavProps} from  "../components/ui/SideNav.tsx";

export interface Person {
  photo?: ImageWidget;
  /** @title Name */
  label?: string;
  role?: string;
  /** @format textarea */
  description?: string;
  links?: {
    website?: string;
    lattes?: string;
    linkedin?: string;
  }
}

export interface Props {
  sidebarNav?: SideNavProps;
  teamGroup?: {
    /** @title Group Name */
    label?: string;
    people?: Person[];
  }[]
}

export default function SobreEquipe({
  sidebarNav,
  teamGroup = [
    {
      label: "Grupo 1",
      people: [
        {
          photo: "https://assets.decocache.com/novo-leme/db438d32-8e0b-40b9-be41-252c9eca49d3/person.png",
          label: "Nome da Pessoa",
          role: "Função da pessoa",
          description: "Doutora em Economia (PUC-Rio) e Profª de políticas públicas na FGV/EBAPE. Joana ocupou cargos de destaque no governo do Rio de Janeiro, como diretora do Instituto de Segurança Pública (2015-2018) e chefe de pesquisa no Ministério Público do Estado (2019-2021). Anteriormente, foi Tinker Visiting Professor na Universidade de Chicago (2023), Visiting Fellow na Columbia University (2021-2022) e Research Fellow na Harvard University (2009-2012). É afiliada ao Evidence in Governance and Politics (EGAP), pesquisadora convidada do J-PAL/MIT, integrante da Global Initiative Against Transnational Organized Crime (GI-TOC) e membro do conselho da Escola de Segurança Multidimensional (ESEM-IRI-USP) e da LACEA-AlCapone. Mais informações: Site, Lattes e LinkedIn.",
          links: {
            website: "/",
            lattes: "/",
            linkedin: "/",
          },
        },
        {
          photo: "https://assets.decocache.com/novo-leme/db438d32-8e0b-40b9-be41-252c9eca49d3/person.png",
          label: "Nome da Pessoa",
          role: "Função da pessoa",
          description: "Doutora em Economia (PUC-Rio) e Profª de políticas públicas na FGV/EBAPE. Joana ocupou cargos de destaque no governo do Rio de Janeiro, como diretora do Instituto de Segurança Pública (2015-2018) e chefe de pesquisa no Ministério Público do Estado (2019-2021). Anteriormente, foi Tinker Visiting Professor na Universidade de Chicago (2023), Visiting Fellow na Columbia University (2021-2022) e Research Fellow na Harvard University (2009-2012). É afiliada ao Evidence in Governance and Politics (EGAP), pesquisadora convidada do J-PAL/MIT, integrante da Global Initiative Against Transnational Organized Crime (GI-TOC) e membro do conselho da Escola de Segurança Multidimensional (ESEM-IRI-USP) e da LACEA-AlCapone. Mais informações: Site, Lattes e LinkedIn.",
          links: {
            website: "/",
            lattes: "/",
            linkedin: "/",
          },
        },
        {
          photo: "https://assets.decocache.com/novo-leme/db438d32-8e0b-40b9-be41-252c9eca49d3/person.png",
          label: "Nome da Pessoa",
          role: "Função da pessoa",
          description: "Doutora em Economia (PUC-Rio) e Profª de políticas públicas na FGV/EBAPE. Joana ocupou cargos de destaque no governo do Rio de Janeiro, como diretora do Instituto de Segurança Pública (2015-2018) e chefe de pesquisa no Ministério Público do Estado (2019-2021). Anteriormente, foi Tinker Visiting Professor na Universidade de Chicago (2023), Visiting Fellow na Columbia University (2021-2022) e Research Fellow na Harvard University (2009-2012). É afiliada ao Evidence in Governance and Politics (EGAP), pesquisadora convidada do J-PAL/MIT, integrante da Global Initiative Against Transnational Organized Crime (GI-TOC) e membro do conselho da Escola de Segurança Multidimensional (ESEM-IRI-USP) e da LACEA-AlCapone. Mais informações: Site, Lattes e LinkedIn.",
          links: {
            website: "/",
            lattes: "/",
            linkedin: "/",
          },
        },
      ]
    },
    {
      label: "Grupo 2",
      people: [
        {
          photo: "https://assets.decocache.com/novo-leme/db438d32-8e0b-40b9-be41-252c9eca49d3/person.png",
          label: "Nome da Pessoa",
          role: "Função da pessoa",
          description: "Doutora em Economia (PUC-Rio) e Profª de políticas públicas na FGV/EBAPE. Joana ocupou cargos de destaque no governo do Rio de Janeiro, como diretora do Instituto de Segurança Pública (2015-2018) e chefe de pesquisa no Ministério Público do Estado (2019-2021). Anteriormente, foi Tinker Visiting Professor na Universidade de Chicago (2023), Visiting Fellow na Columbia University (2021-2022) e Research Fellow na Harvard University (2009-2012). É afiliada ao Evidence in Governance and Politics (EGAP), pesquisadora convidada do J-PAL/MIT, integrante da Global Initiative Against Transnational Organized Crime (GI-TOC) e membro do conselho da Escola de Segurança Multidimensional (ESEM-IRI-USP) e da LACEA-AlCapone. Mais informações: Site, Lattes e LinkedIn.",
          links: {
            website: "/",
            lattes: "/",
            linkedin: "/",
          },
        },
        {
          photo: "https://assets.decocache.com/novo-leme/db438d32-8e0b-40b9-be41-252c9eca49d3/person.png",
          label: "Nome da Pessoa",
          role: "Função da pessoa",
          description: "Doutora em Economia (PUC-Rio) e Profª de políticas públicas na FGV/EBAPE. Joana ocupou cargos de destaque no governo do Rio de Janeiro, como diretora do Instituto de Segurança Pública (2015-2018) e chefe de pesquisa no Ministério Público do Estado (2019-2021). Anteriormente, foi Tinker Visiting Professor na Universidade de Chicago (2023), Visiting Fellow na Columbia University (2021-2022) e Research Fellow na Harvard University (2009-2012). É afiliada ao Evidence in Governance and Politics (EGAP), pesquisadora convidada do J-PAL/MIT, integrante da Global Initiative Against Transnational Organized Crime (GI-TOC) e membro do conselho da Escola de Segurança Multidimensional (ESEM-IRI-USP) e da LACEA-AlCapone. Mais informações: Site, Lattes e LinkedIn.",
          links: {
            website: "/",
            lattes: "/",
            linkedin: "/",
          },
        },
        {
          photo: "https://assets.decocache.com/novo-leme/db438d32-8e0b-40b9-be41-252c9eca49d3/person.png",
          label: "Nome da Pessoa",
          role: "Função da pessoa",
          description: "Doutora em Economia (PUC-Rio) e Profª de políticas públicas na FGV/EBAPE. Joana ocupou cargos de destaque no governo do Rio de Janeiro, como diretora do Instituto de Segurança Pública (2015-2018) e chefe de pesquisa no Ministério Público do Estado (2019-2021). Anteriormente, foi Tinker Visiting Professor na Universidade de Chicago (2023), Visiting Fellow na Columbia University (2021-2022) e Research Fellow na Harvard University (2009-2012). É afiliada ao Evidence in Governance and Politics (EGAP), pesquisadora convidada do J-PAL/MIT, integrante da Global Initiative Against Transnational Organized Crime (GI-TOC) e membro do conselho da Escola de Segurança Multidimensional (ESEM-IRI-USP) e da LACEA-AlCapone. Mais informações: Site, Lattes e LinkedIn.",
          links: {
            website: "/",
            lattes: "/",
            linkedin: "/",
          },
        },
      ]
    }
  ]
}: Props) {
  return (
    <div className="container px-12 flex gap-28 my-12">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex-auto flex flex-col gap-10">
        {teamGroup?.map((group) => (
          <div>
            <div className="text-primary mb-5">
              <Title label={group.label} titleSize="4xl" serif />
            </div>
            <div class="grid grid-cols-2 gap-12">
              {group.people?.map((person) => (
                <div className="flex gap-5">
                  <div className="flex-none">
                    <Image class="rounded-md" src={person?.photo || ""} alt={person?.label} width={138} height={165} />
                  </div>
                  <div className="flex-auto flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-[2px]">
                        <h4 className="font-serif text-2xl">{person.label}</h4>
                        <div className="font-semibold">{person.role}</div>
                      </div>
                      {
                        person.links?.website || person.links?.lattes || person.links?.linkedin ? (
                          <ul className="flex gap-4 text-secondary">
                            {person.links?.website ? <li><a href={person.links?.website} className="flex gap-1 items-center hover:underline">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2734 1.75488C11.6416 1.79974 12.9786 2.18409 14.1631 2.87598C15.4262 3.61388 16.4704 4.67477 17.1885 5.94922C17.886 7.18504 18.2521 8.58092 18.25 10C18.25 10.7122 18.1589 11.4044 17.9893 12.0645V12.0654C17.5309 13.8357 16.4978 15.4041 15.0518 16.5234C13.696 17.5729 12.0492 18.1723 10.3418 18.2432L10 18.25C8.17136 18.2499 6.39428 17.6428 4.94825 16.5234C3.5022 15.4041 2.46913 13.8357 2.01075 12.0654V12.0645C1.83729 11.3899 1.74938 10.6956 1.75 9.99902C1.75017 8.52953 2.13551 7.14623 2.81153 5.94922C3.52956 4.67477 4.57385 3.61388 5.83692 2.87598C7.10018 2.13806 8.537 1.74945 10 1.75L10.2734 1.75488ZM7.74121 14.3369C7.82812 14.5597 7.92093 14.7706 8.01953 14.9678C8.61826 16.1652 9.30888 16.6838 9.88575 16.7441L10 16.75C10.5982 16.75 11.3417 16.2453 11.9805 14.9678C12.0789 14.771 12.1701 14.5601 12.2568 14.3379C11.5117 14.4451 10.7578 14.5002 10 14.499V14.5C9.23304 14.5 8.47909 14.4429 7.74121 14.3369ZM4.15625 13.3789C4.59158 14.1311 5.16993 14.7979 5.86621 15.3369C6.17859 15.5787 6.51055 15.7907 6.85645 15.9727C6.79469 15.8631 6.7344 15.752 6.67774 15.6387C6.43061 15.1444 6.21847 14.5926 6.04395 13.9971C5.39778 13.8299 4.7676 13.6233 4.15625 13.3789ZM15.8418 13.3789C15.2258 13.6251 14.596 13.833 13.9551 13.999C13.7807 14.5938 13.5691 15.145 13.3223 15.6387C13.2655 15.7521 13.2044 15.8629 13.1426 15.9727C13.4888 15.7906 13.8212 15.5789 14.1338 15.3369C14.8298 14.7981 15.4065 14.1307 15.8418 13.3789ZM3.73438 7.48535C3.42239 8.26203 3.25 9.1104 3.25 10V10.001C3.24961 10.464 3.29878 10.9251 3.39258 11.3779C4.11871 11.7587 4.8817 12.0777 5.67481 12.3301C5.56032 11.5886 5.5 10.8059 5.5 10C5.5 9.50409 5.52401 9.01709 5.56836 8.54297C4.92051 8.24932 4.30585 7.89595 3.73438 7.48535ZM10 3.25C9.40178 3.25 8.65834 3.7547 8.01953 5.03223C7.67107 5.72915 7.39067 6.59321 7.21289 7.57031C8.09254 7.84802 9.02833 8 10 8H10.001C10.9535 8.00137 11.8919 7.85261 12.7861 7.57031C12.6084 6.59328 12.3289 5.72911 11.9805 5.03223C11.3417 3.7547 10.5982 3.25 10 3.25ZM13.1445 4.0293C13.2059 4.13829 13.2659 4.24867 13.3223 4.36133C13.7011 5.11892 14.0001 6.01075 14.2022 6.99023C14.6705 6.75106 15.1188 6.47085 15.543 6.15234C14.984 5.34707 14.2579 4.66897 13.4072 4.17188C13.3212 4.12163 13.2324 4.07556 13.1445 4.0293ZM6.59278 4.17188C5.74191 4.66907 5.01503 5.34687 4.45606 6.15234C4.87696 6.46817 5.32573 6.74793 5.79785 6.98926C5.99991 6.01014 6.29906 5.11868 6.67774 4.36133C6.734 4.24882 6.79321 4.13815 6.8545 4.0293C6.76686 4.07544 6.67853 4.12178 6.59278 4.17188ZM7 10C7 10.9801 7.0989 11.9053 7.27344 12.7393C8.15574 12.9101 9.06719 13 10 13H10.001C10.919 13.0014 11.8312 12.9119 12.7256 12.7383C12.9 11.9045 13 10.9799 13 10C13 9.68801 12.988 9.38171 12.9688 9.08203C12.0106 9.35708 11.0122 9.50038 10 9.49902V9.5C8.96964 9.5 7.97306 9.35394 7.0293 9.08301C7.01007 9.38234 7 9.68839 7 10ZM14.5 10C14.5 10.806 14.4387 11.5885 14.3242 12.3301C15.109 12.0803 15.8725 11.7617 16.6064 11.377C16.6983 10.9325 16.75 10.4725 16.75 10V9.99902C16.7514 9.13543 16.5853 8.28267 16.2656 7.48633C15.6886 7.90107 15.0727 8.25226 14.4307 8.54297C14.475 9.01712 14.5 9.50406 14.5 10Z" fill="#EA7342"/>
                              </svg>
                              <span>Website</span>
                            </a></li> : ''}
                            {person.links?.lattes ? <li><a href={person.links?.lattes} className="flex gap-1 items-center hover:underline">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 17.1875V2.8125C3 1.88079 3.75579 1.125 4.6875 1.125H8.75C10.938 1.125 13.0368 1.99384 14.584 3.54102C16.1312 5.08819 17 7.18696 17 9.375V17.1875C17 18.1192 16.2442 18.875 15.3125 18.875H4.6875C3.75579 18.875 3 18.1192 3 17.1875ZM10 14.25L10.0771 14.2539C10.4551 14.2925 10.75 14.6118 10.75 15C10.75 15.3882 10.4551 15.7075 10.0771 15.7461L10 15.75H6.875C6.46079 15.75 6.125 15.4142 6.125 15C6.125 14.5858 6.46079 14.25 6.875 14.25H10ZM13.125 11.75L13.2021 11.7539C13.5801 11.7925 13.875 12.1118 13.875 12.5C13.875 12.8882 13.5801 13.2075 13.2021 13.2461L13.125 13.25H6.875C6.46079 13.25 6.125 12.9142 6.125 12.5C6.125 12.0858 6.46079 11.75 6.875 11.75H13.125ZM12 5.9375C12 5.98723 12.0195 6.03515 12.0547 6.07031C12.0899 6.10548 12.1378 6.125 12.1875 6.125H13.4375C13.9117 6.125 14.3761 6.21976 14.8057 6.39844C14.4818 5.73961 14.0523 5.13047 13.5234 4.60156C12.9942 4.07234 12.3849 3.64224 11.7256 3.31836C11.9046 3.74822 12 4.21283 12 4.6875V5.9375ZM4.5 17.1875C4.5 17.2908 4.58421 17.375 4.6875 17.375H15.3125C15.4158 17.375 15.5 17.2908 15.5 17.1875V9.6875L15.4902 9.4834C15.4433 9.01132 15.2339 8.56789 14.8955 8.22949C14.5087 7.8427 13.9845 7.625 13.4375 7.625H12.1875C11.7399 7.625 11.3106 7.44733 10.9941 7.13086C10.6777 6.81439 10.5 6.38505 10.5 5.9375V4.6875C10.5 4.14049 10.2823 3.61629 9.89551 3.22949C9.55711 2.8911 9.11368 2.68169 8.6416 2.63477L8.4375 2.625H4.6875C4.58421 2.625 4.5 2.70921 4.5 2.8125V17.1875Z" fill="#EA7342"/>
                              </svg>
                              <span>Lattes</span>
                            </a></li> : ''}
                            {person.links?.linkedin ? <li><a href={person.links?.linkedin} className="flex gap-1 items-center hover:underline">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.91602 13.3335V9.1665C5.91602 8.75229 6.2518 8.4165 6.66602 8.4165C7.08023 8.4165 7.41602 8.75229 7.41602 9.1665V13.3335C7.41584 13.7476 7.08012 14.0835 6.66602 14.0835C6.25191 14.0835 5.91619 13.7476 5.91602 13.3335Z" fill="#EA7342"/>
                                <path d="M5.91602 6.67529V6.6665C5.91602 6.25229 6.2518 5.9165 6.66602 5.9165C7.08023 5.9165 7.41602 6.25229 7.41602 6.6665V6.67529C7.41577 7.0893 7.08008 7.42529 6.66602 7.42529C6.25195 7.42529 5.91626 7.0893 5.91602 6.67529Z" fill="#EA7342"/>
                                <path d="M9.25 13.3335V9.1665C9.25 8.75229 9.58579 8.4165 10 8.4165C10.4142 8.4165 10.75 8.75229 10.75 9.1665V13.3335C10.7498 13.7476 10.4141 14.0835 10 14.0835C9.58589 14.0835 9.25018 13.7476 9.25 13.3335Z" fill="#EA7342"/>
                                <path d="M12.583 13.3335V10.8335C12.583 10.5904 12.4864 10.357 12.3145 10.1851C12.1426 10.0133 11.9099 9.91659 11.667 9.9165C11.4239 9.9165 11.1905 10.0131 11.0186 10.1851C10.8466 10.357 10.75 10.5904 10.75 10.8335C10.7498 11.2476 10.4141 11.5835 10 11.5835C9.58589 11.5835 9.25018 11.2476 9.25 10.8335C9.25 10.1926 9.5048 9.57772 9.95801 9.12451C10.4112 8.6713 11.0261 8.4165 11.667 8.4165C12.3078 8.41659 12.9228 8.67138 13.376 9.12451C13.829 9.57769 14.083 10.1927 14.083 10.8335V13.3335C14.0828 13.7476 13.7471 14.0835 13.333 14.0835C12.9191 14.0833 12.5832 13.7475 12.583 13.3335Z" fill="#EA7342"/>
                                <path d="M16.75 5.83301C16.7499 5.14798 16.4776 4.49123 15.9932 4.00684C15.5088 3.52244 14.852 3.25009 14.167 3.25H5.83301C5.14798 3.25009 4.49123 3.52244 4.00684 4.00684C3.52244 4.49123 3.25009 5.14798 3.25 5.83301V14.167C3.25009 14.852 3.52244 15.5088 4.00684 15.9932C4.49123 16.4776 5.14798 16.7499 5.83301 16.75H14.167C14.852 16.7499 15.5088 16.4776 15.9932 15.9932C16.4776 15.5088 16.7499 14.852 16.75 14.167V5.83301ZM18.25 14.167C18.2499 15.2498 17.8194 16.288 17.0537 17.0537C16.288 17.8194 15.2498 18.2499 14.167 18.25H5.83301C4.75016 18.2499 3.71199 17.8194 2.94629 17.0537C2.18059 16.288 1.75009 15.2498 1.75 14.167V5.83301C1.75009 4.75016 2.18059 3.71199 2.94629 2.94629C3.71199 2.18059 4.75016 1.75009 5.83301 1.75H14.167C15.2498 1.75009 16.288 2.18059 17.0537 2.94629C17.8194 3.71199 18.2499 4.75016 18.25 5.83301V14.167Z" fill="#EA7342"/>
                              </svg>
                              <span>Linkedin</span>
                            </a></li> : ''}
                          </ul>
                        ) : ''
                      }
                    </div>
                    <div className="line-clamp-3 text-sm text-neutral-950">{person.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
