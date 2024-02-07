import MenuItem from "./Interface";

const participanteLinks: MenuItem[] = [
  {
    key: "/participante/process_ssu",
    label: "Servicio Social",
    icon: "tabler:link",
    children: [
      {
        label: "Solicitar SSU",
        key: "/participante/ssu/request",
        icon: "tabler:link-plus",
      },
      {
        label: "Ver Solicitud",
        key: "/participante/ssu/consult",
        icon: "tabler:list-search",
      },
    ] as MenuItem[],
  },
  {
    key: "/participante/process_pasantia",
    type: "group",
    label: "Pasantía",
    icon: "tabler:settings",

    children: [
      {
        label: "Solicitar Pasantía",
        key: "/participante/pasantia/request",
        icon: "tabler:settings-plus",
      },
      {
        label: "Ver Solicitud ",
        key: "/participante/pasantia/consult",
        icon: "tabler:settings-search",
      },
    ] as MenuItem[],
  },
  {
    label: "Mi Perfil",
    key: "/participante/profile",
    icon: "ep:user-filled",
    children: [
      {
        label: "Ver perfil",
        key: "/participante/profile",
        icon: "ep:user-filled",
      },
      {
        label: "Editar perfil",
        key: "/participante/profile/edit",
        icon: "tabler:user-edit",
      },
    ] as MenuItem[],
  },
];

export default participanteLinks;
