// この JavaScript ファイルは、wwwroot/index.html などの
// フォールバックページ内にて script タグで読み込んでおきます。


// コンボボックスコンポーネントのテキスト入力欄を readOnly にするスクリプトを登録します。
igRegisterScript("makeReadOnly", (ctx) => {
    const combo = ctx.target;
    combo
        .shadowRoot.querySelector("igc-input")
        .shadowRoot.querySelector("input")
        .readOnly = true;
}, false);