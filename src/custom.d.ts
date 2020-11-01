type MoneyObject = {
    type: string;
    noteVaule: string;
    selectedTags: string[];
    money: number;
    saveTime ? : string
}

type MessageModel = {
    type: boolean;
    message: string;
}

type TagData = {
    id: string;
    name: string;
    icon:string;
}