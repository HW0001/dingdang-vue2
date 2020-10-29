const localStorageKey="moneyobj";
type RecordModel={
    data: MoneyObject [];
    defaultValue: MoneyObject;
    fetch: () => void;
    add: (record: MoneyObject) => void;
    save: () => void;
    clone: (obj: MoneyObject) => MoneyObject;
    reset: () => MoneyObject;
}

const recordModel: RecordModel={
    data : [],
    defaultValue : {
        type : "-",
        noteVaule : "",
        selectedTags : [],
        money : 0
    },
    fetch () {
        this.data = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    },
    add (record) {
        record.saveTime=new Date();
        this.data.push(record);
        this.save();
    },
    save () {
    localStorage.setItem(localStorageKey, JSON.stringify(this.data));
    },
    clone (obj) {
        return JSON.parse(JSON.stringify(obj))
    },
    reset () {
        return this.clone(this.defaultValue)
    }
}

export default recordModel