export const arcadia = {
  stash: {
    project: "NUSE_GMSE_Recuperaciones_y_Activos_Adjudicados",
    key: "NUSEGMSE",
    description: "Proyecto Recuperaciones y Activos Adjudicados",
    url: "https://aqdes-stash02.cm.es/stash/projects/NUSEGMSE",
    repos: [
      {
        type: "sub",
        name: "nuse-gmse-sub",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/nusegmse/nuse-gmse-sub.git",
        arq_analysis: {
          has_tags: false,
          master_empty: false,
          releasecandidate_empty: true,
          develop_empty: true,
          jira_features: false,
          file_structure: {
            root_config: false
          },
          back: {
            assembly_folder: 'Arcadia-Paquetizacion',
            archetyped_subfolders: true,
            archetyped_new: false
          }
        }
      }
    ]
  }
}