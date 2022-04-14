export default {
  fileSuffix: ".sheet",
  fileNew: "NewDocument",
  appName: "Author",

  fileScreen: {
    title: "Documentation Library",
    addFolderButton: "Library",
    addFileButton: "Document"
  },

  backend: {
    user: {
      list:   path  => `../sheets/user/list?path=${path}`,
      get:    file  => `../sheets/user/get?filePath=${file}`,
      share:  file  => `../sheets/user/share?filePath=${file}`,
      image:  file  => `../common/images/files_markdown.svg`,
      delete:          `../sheets/user/delete`,
      rename:          `../sheets/user/rename`,
      save:            `../sheets/user/save`,
      folder:          `../sheets/user/folder`
    },

    global:{
      list:   path  => `../sheets/global/list?path=${path}`,
      get:    file  => `../sheets/global/get?filePath=${file}`,
      share:  file  => `../sheets/global/share?filePath=${file}`,
      image:  file  => `../common/images/files_markdown.svg`,
      delete:          `../sheets/global/delete`,
      rename:          `../sheets/global/rename`,
      save:            `../sheets/global/save`,
      folder:          `../sheets/global/folder`
    }
  },

  shapes: {
    url: "../shapes/global/",
    version: "0.0.0" // updated during after loading from the index.json file
  },

  color: {
    high: "#C21B7A",
    low:  "#0078F2"
  }
}
