export const prestamosCommon = {
  stash: {
    project: "PRESTAMOS_CPPA_Productos_Activo_COMUNES",
    key: "PRESTCPPA",
    description: "Proyecto Productos de Activo - COMUNES",
    url: "https://aqdes-stash.cm.es/stash/projects/PRESTCPPA",
    repos: [
      {
        type: "sub",
        name: "prestamos-cppa-pract-sub",
        url_http: "https://aqdes-stash.cm.es/stash/scm/prestcppa/prestamos-cppa-pract-sub.git",
        arq_analysis: {
          has_tags: false,
          master_empty: false,
          releasecandidate_empty: false,
          develop_empty: false,
          jira_features: true,
          file_structure: {
            root_config: false
          },
          back: {
            assembly_folder: 'paquetizacion-SubprocesosLite',
            archetyped_subfolders: true,
            archetyped_new: false
          }
        }
      }
    ]
  }
}