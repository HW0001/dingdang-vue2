  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    state: {
      tagsRecord: [] as TagData[]
    },
    mutations: {
        fetchTags(state){
          const tags = localStorage.getItem("taglist"); 
          if(tags)
          {
            state.tagsRecord = JSON.parse(tags) as TagData[];
          }  
        },
        addTag(state,tag){ 
          if(state.tagsRecord.some(e=>e.name===tag)){
              return alert("标签已存在")
          }
          else{
              const maxid = Math.max(...state.tagsRecord.map(e=>parseInt(e.id)));
              state.tagsRecord.push({
                  id:(maxid+1).toString(),
                  name:tag
              });
              localStorage.setItem("taglist",JSON.stringify(state.tagsRecord));  
              return alert("保存成功")
          }  
        
      },
      deleteTag(state,tagid){
        state.tagsRecord.splice(state.tagsRecord.findIndex(e=>e.id===tagid),1) 
        localStorage.setItem("taglist",JSON.stringify(state.tagsRecord));  
       }, 
    },
    actions: {
    },
    modules: {
    }
  })

  store.commit("fetchTags")

  export default store