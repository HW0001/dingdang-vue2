const localStroageKey="taglist";

type TagsModel = {
    data: string[];
    fetch: () => void;
    add: (tag: string) => string;
    save: () => void;
    clone: () => string[];
}

const tagsModel: TagsModel={
    data: [],
    fetch(){
        const tags = localStorage.getItem(localStroageKey); 
        if(tags)
        {
        this.data = JSON.parse(tags);
        } 
        else{
            this.data = ["衣","食","住","行","吃饭"];
        }
    },
    add(tag){
        this.data.push(tag);
        this.save();
        return tag;
    },
    save(){
        localStorage.setItem(localStroageKey,JSON.stringify(this.data));  
    },
    clone(){
        return JSON.parse(JSON.stringify(this.data));
    }

}
export default tagsModel