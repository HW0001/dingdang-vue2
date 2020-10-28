const localStroageKey="taglist";
 
type TagsModel = {
    data: TagData[];
    fetch: () => void;
    add: (tagname: string) => MessageModel;
    delete: (id: string) => MessageModel;
    save: () => void;
    clone: () => string[];
}

const tagsModel: TagsModel={
    data: [],
    fetch(){
        const tags = localStorage.getItem(localStroageKey); 
        if(tags)
        {
        this.data = JSON.parse(tags) as TagData[];
        } 
        else{
            this.data = [{
                id:"1",
                name:"衣"
            },{
                id:"2",
                name:"食"
            },{
                id:"3",
                name:"住"
            },{
                id:"4",
                name:"行"
            }];
        }
    },
    add(tag){
        const mess={type:true,message:""}; 
        if(this.data.some(e=>e.name===tag)){
            mess.type=false;
            mess.message="标签已存在";
        }
        else{
            const maxid = Math.max(...this.data.map(e=>parseInt(e.id)));
            this.data.push({
                id:(maxid+1).toString(),
                name:tag
            });
            this.save();
            mess.message="保存成功";
        } 
        return mess;
    },
    delete(tagid){
        this.data.splice(this.data.findIndex(e=>e.id===tagid),1)
        this.save();
        return {type:true,message:""};
    },
    save(){
        localStorage.setItem(localStroageKey,JSON.stringify(this.data));  
    },
    clone(){
        return JSON.parse(JSON.stringify(this.data));
    }

}
export default tagsModel