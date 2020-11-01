  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    state: {
      tagsRecord: [] as TagData[],
      monryRecord:[] as MoneyObject[]
    },
    mutations: {
        fetchTags(state){
          const tags = localStorage.getItem("taglist"); 
          if(tags)
          {
            state.tagsRecord = JSON.parse(tags) as TagData[];
          }  
        },
        addTag(state,tag: TagData){ 
          if(state.tagsRecord.some(e=>e.name===tag.name)){
              return alert("标签已存在")
          }
          else{
              const maxid = Math.max(...state.tagsRecord.map(e=>parseInt(e.id)));
              state.tagsRecord.push({
                  id:(maxid+1).toString(),
                  name:tag.name,
                  icon:tag.icon
              });
              store.commit("saveTags");
              return alert("保存成功")
          }  
        
      },
      deleteTag(state,tagid){
        state.tagsRecord.splice(state.tagsRecord.findIndex(e=>e.id===tagid),1)  
        store.commit("saveTags");
       }, 
       saveTags(state){
        localStorage.setItem("taglist",JSON.stringify(state.tagsRecord));  
       },
       fetchMoney(state){
        const tags = localStorage.getItem("moneyobj"); 
        if(tags)
        {
          state.monryRecord = JSON.parse(tags) as MoneyObject[];
        }  
       },
       addMoney(state,money: MoneyObject){
        money.saveTime=new Date().toISOString();
        state.monryRecord.push(money); 
        store.commit("saveMoneyRecord")
       },
       saveMoneyRecord(state){
        localStorage.setItem("moneyobj", JSON.stringify(state.monryRecord));
       } 
    },
    actions: {
    },
    modules: {
    }
  })

  store.commit("fetchTags")
  store.commit("fetchMoney")

  export default store