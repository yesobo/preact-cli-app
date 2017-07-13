export const avales = {
  stash: {
    project: "AVALES_BCBC_Sistema_Informacion_Avales",
    key: "SAVALBCBC",
    description: "Sistema de Información Avales -CONSULTAS",
    url: "https://aqdes-stash02.cm.es/stash/projects/SAVALBCBC",
    repos: [
      {
        type: "sub",
        name: "avales-bcbc-sub",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/savalbcbc/avales-bcbc-sub.git",
        arq_analysis: {
          has_tags: false,
          master_empty: true,
          releasecandidate_empty: true,
          develop_empty: false,
          jira_features: true,
          file_structure: {
            root_config: false
          },
          back: {
            assembly_folder: 'sbp-assembly',
            archetyped_subfolders: true,
            archetyped_new: false // 1.1.0
          }
        }
      },
      {
        type: "sng",
        name: "avales-bcbc-sng",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/savalbcbc/avales-bcbc-sng.git",
        arq_analysis: {
          has_tags: false,
          master_empty: true,
          releasecandidate_empty: true,
          develop_empty: false,
          jira_features: true,
          file_structure: {
            root_config: false,
          },
          back: {
            assembly_folder: '',
            archetyped_subfolders: true
          }
        }
      },
      {
        type: "view",
        name: "avales-bcbc-view-consultaAvales",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/savalbcbc/avales-bcbc-view-consultaavales.git",
        arq_analysis: {
          has_tags: false,
          master_empty: true,
          releasecandidate_empty: true,
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
      },
      {
        type: "view",
        name: "avales-bcbc-view-consultaLineaAvales",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/savalbcbc/avales-bcbc-view-consultalineaavales.git",
        arq_analysis: {
          has_tags: false,
          master_empty: true,
          releasecandidate_empty: true,
          develop_empty: false,
          jira_features: true,
          file_structure: {
            root_config: true,
          },
          web: {
            build_tool: 'gulp',
            dep_tool: 'bower',
            versioning: false
          }
        }
      }

    ]
  }
}

export default avales;