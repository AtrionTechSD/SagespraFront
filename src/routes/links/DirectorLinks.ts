import MenuItem from "./Interface";

const directorLinks: MenuItem[] = [
  {
    key: "/director/process_ssu",
    label: "Servicio Social",
    icon: "tabler:link",
    children: [
      {
        label: "Consultar",
        key: "/director/ssu/consult",
        icon: "tabler:list-search",
      },
    ] as MenuItem[],
  },
  {
    key: "/director/process_pasantia",
    type: "group",
    label: "Pasantía",
    icon: "tabler:settings",

    children: [
      {
        label: "Consultar",
        key: "/director/pasantia/consult",
        icon: "tabler:settings-search",
      },
    ] as MenuItem[],
  },
];

export default directorLinks;
