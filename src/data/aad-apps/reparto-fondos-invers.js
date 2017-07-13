export const repartoFondos = {
  stash: {
    project: "FONDINVERS_PHFP_Fondos_Inversion",
    key: "FONDIPHFP",
    description: "Proyecto fondos de Inversión",
    url: "https://aqdes-stash02.cm.es/stash/projects/FONDIPHFP",
    repos: [
      {
        type: "sub",
        name: "fondinvers-phfp-sub",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/fondiphfp/fondinvers-phfp-sub.git",
        arq_analysis: {
          has_tags: false,
          master_empty: true,
          releasecandidate_empty: true,
          develop_empty: false,
          jira_features: false,
          file_structure: {
            root_config: false
          },
          back: {
            assembly_folder: 'sbp-assembly',
            archetyped_subfolders: true,
            archetyped_new: false
          }
        }
      },
      {
        type: "view",
        name: "fondinvers-phfp-view",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/fondiphfp/fondinvers-phfp-view.git",
        arq_analysis: {
          has_tags: true,
          master_empty: false,
          releasecandidate_empty: false,
          develop_empty: false,
          jira_features: true,
          file_structure: {
            root_config: true,
          },
          web: {
            build_tool: 'gulp',
            dep_tool: 'bower'
          }
        }
      }
    ]
  }
}