var localStorageKey = "moneyobj";
var recordModel = {
    data: [],
    defaultValue: {
        type: "-",
        noteVaule: "",
        selectedTags: [],
        money: 0
    },
    fetch: function () {
        this.data = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    },
    add: function (record) {
        this.data.push(record);
    },
    save: function () {
        localStorage.setItem("moneyobj", JSON.stringify(this.data));
    },
    clone: function (obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    reset: function () {
        return this.clone(this.defaultValue);
    }
};
export default recordModel;
//# sourceMappingURL=recordModel.js.map