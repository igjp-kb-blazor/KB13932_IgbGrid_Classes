/* "顧客名"列の条件付きクラスを設定 */
igRegisterScript("CellClassesHandler1", function () {
    return {
        name: (rowData, columnKey, cellValue, rowIndex) => true
    };
}, true);

/* "お問い合わせ"列の条件付きクラスを設定 */
igRegisterScript("CellClassesHandler2", () => {
    return {
        inquiries: (rowData, columnKey, cellValue, rowIndex) => true    };
}, true);

/* 行全体に"ステータス"列の値からクラスを設定 */
igRegisterScript("RowClassesHandler", () => {
    return {
        open: (row) => {
            return row.data.Status == "オープン";
        },
        inProgress: (row) => {
            return row.data.Status == "進行中";
        },
        closed: (row) => {
            return row.data.Status == "完了";
        }
    };
}, true);