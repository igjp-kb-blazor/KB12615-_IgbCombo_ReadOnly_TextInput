// ���� JavaScript �t�@�C���́Awwwroot/index.html �Ȃǂ�
// �t�H�[���o�b�N�y�[�W���ɂ� script �^�O�œǂݍ���ł����܂��B


// �R���{�{�b�N�X�R���|�[�l���g�̃e�L�X�g���͗��� readOnly �ɂ���X�N���v�g��o�^���܂��B
igRegisterScript("makeReadOnly", (ctx) => {
    const combo = ctx.target;
    combo
        .shadowRoot.querySelector("igc-input")
        .shadowRoot.querySelector("input")
        .readOnly = true;
}, false);