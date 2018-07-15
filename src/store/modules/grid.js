export default {
  state: {
    allGridLayout: [
      {i: 'chart', x: 3, y: 0, w: 9, h: 7, minW: 5, minH: 7},
    ],
    gridData: [
      {i: 'chart', x: 3, y: 0, w: 9, h: 7, minW: 5, minH: 7},
    ],
    mobileGridData: [
      {i: 'chart', x: 0, y: 7, w: 12, h: 7, minW: 5, minH: 7},
    ],
    isEdit: false,
  },

  mutations: {
    changeGrid(state, data) {
      state.gridData = data.map((el) => {
        return {
          i: el.i,
          x: el.x,
          y: el.y,
          w: el.w,
          h: el.h,
          minW: el.minW,
          minH: el.minH,
          maxH: el.maxH,
        };
      });
    },
    setIsEdit(state) {
      state.isEdit = !state.isEdit;
    },
    addGridLayout(state, component) {
      let unique = true;
      state.gridData.forEach((el) => {
        if (el.i == component.i) {
          unique = false;
          return false;
        }
      });
      if (unique) {
        state.gridData.push(component);
      }
    },
    removeGridLayout(state, component) {
      // console.log('Remove grid item ', component);
      state.gridData = state.gridData.filter((e) => {
        return e.i != component;
      });
    },
  },
  getters: {
    getHiddenLayout(state) {
      return state.allGridLayout.filter((e) => state.gridData.findIndex((i) => i.i == e.i) === -1);
    },
  },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
