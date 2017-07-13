export const captacionFondos = {
  stash: {
    project: "CAPTACION_VALORES_Operaciones_Fondos_Inversion",
    key: "CAPVAPHVA",
    description: "Proyecto CAPTACIÓN Y VALORES - Operaciones de Fondos de Inversión",
    url: "https://aqdes-stash.cm.es/stash/projects/CAPVAPHVA",
    repos: [
      {
        type: "sub",
        name: "RepositoryentComun-phva-sub",
        url_http: "https://aqdes-stash.cm.es/stash/scm/capvaphva/entcomun-phva-sub.git",
        arq_analysis: {
          has_tags: false,
          master_empty: false,
          master_sync: false,
          releasecandidate_empty: true,
          develop_empty: false,
          jira_features: true,
          file_structure: {
            root_config: false
          },
          back: {
            assembly_folder: 'fondos-construccion',
            archetyped_subfolders: true,
            archetyped_new: true
          }
        }
      },
      {
        type: "sub",
        name: "reembolso-phva-sub",
        url_http: "https://aqdes-stash.cm.es/stash/scm/capvaphva/reembolso-phva-sub.git",
        arq_analysis: {
          has_tags: false,
          master_empty: false,
          master_sync: false,
          releasecandidate_empty: true,
          develop_empty: false,
          jira_features: true,
          file_structure: {
            root_config: false
          },
          back: {
            assembly_folder: 'reembolso-construccion',
            archetyped_subfolders: true,
            archetyped_new: false
          }
        }
      }
    ]
  }
}