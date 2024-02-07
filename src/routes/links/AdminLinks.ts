import MenuItem from "./Interface";

const adminLinks: MenuItem[] = [
  {
    key: "/usuarios",
    label: "Usuarios",
    icon: "tabler:users-group",
    children: [
      {
        label: "Consultar Usuarios",
        key: "/users",
        icon: "tabler:user-search",
      },
      {
        label: "Añadir Usuario",
        key: "/users/create",
        icon: "tabler:user-plus",
      },
    ] as MenuItem[],
  },
];

export default adminLinks;
