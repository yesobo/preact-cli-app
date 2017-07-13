export const tarjetas = {
  stash: {
    project: "ADMTARJETA_PPPP_Medios_Pago_Adm_Tarjetas",
    key: "ADMTJPPPP",
    description: "Medios de Pago - Administración de Tarjetas",
    url: "https://aqdes-stash02.cm.es/stash/projects/ADMTJPPPP",
    repos: [
      {
        type: "sub",
        name: "admtarjeta-pppp-sub",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/admtjpppp/admtarjeta-pppp-sub.git",
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
            assembly_folder: 'tarjetas-flow',
            archetyped_subfolders: true,
            archetyped_new: false //< 1.1.0
          }
        }
      },
      {
        type: "sng",
        name: "admtarjeta-pppp-sng",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/admtjpppp/admtarjeta-pppp-sng.git",
        arq_analysis: {
          has_tags: false,
          master_empty: true,
          releasecandidate_empty: false,
          develop_empty: false,
          jira_features: true,
          file_structure: {
            root_config: false,
          },
          back: {
            assembly_folder: ''
          }
        }
      },
      {
        type: "sap",
        name: "admtarjeta-pppp-sap",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/admtjpppp/admtarjeta-pppp-sap.git",
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
            assembly_folder: 'tarjetas-sap',
            archetyped_subfolders: true,
            archetyped_new: false //< 1.1.0
          }
        }
      },
      {
        type: "view",
        name: "admtarjeta-pppp-view",
        url_http: "https://aqdes-stash02.cm.es/stash/scm/admtjpppp/admtarjeta-pppp-view.git",
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

export default tarjetas;