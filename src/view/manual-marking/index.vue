<template>
  <div>
    <div
      class="edit-container"
      @mouseup="mouseup"
      @contextmenu="rightClick"
      :contentEditable="contentEditable"
    >
      <template v-for="(item, index) in QuestionTagging">
        <span
          v-if="!item.attribute"
          :key="item.text"
          data-marked="true"
          @click="setPosition(index)"
          @contextmenu="setPosition(index)"
        >
          {{ item.text }}
        </span>
        <span v-if="item.attribute" :key="item.text" class="mark-item">
          <span>{{ item.text }}</span>
          <strong>{{ item.attribute }}</strong>
          <i class="el-icon-error" @click="deleteMarked(index)"></i>
        </span>
      </template>
    </div>
    <fine-dialog v-model="dialogVisible">
      <div>
        <input
          v-model="missingValue"
          placeholder="缺省值"
          v-if="mouseType === 'right'"
        />
        <ul>
          <li
            v-for="attribute in attributeList"
            :key="attribute"
            @click="distribute(attribute)"
          >
            {{ attribute }}
          </li>
        </ul>
      </div>
    </fine-dialog>
  </div>
</template>

<script>
import FineDialog from '@/components/fine-dialog';
let selection = null;
let lastEditRange = null;
const testText =
  '这是一段话，你可以在这段话里面选择字段并标注，哪怕这段话里有重复的字段，你也可以直接右键打开菜单，插入缺省值，重复的，重复的，你好，你好，你好，你很好';
export default {
  components: {
    FineDialog,
  },
  data() {
    return {
      dialogVisible: false,
      contentEditable: false,
      position: 0,
      missingValue: '',
      sourc: '我是一段话啊，你说呢',
      QuestionTagging: [
        {
          text: testText,
          attribute: '',
        },
      ],
      attributeList: ['a属性', 'b属性'],
      lastSelectionText: '',
      mouseType: '',
      currentSelectionData: {},
      currentInsertData: {},
    };
  },
  methods: {
    rightClick(event, index) {
      event.preventDefault();
      this.mouseType = 'right';
      selection = window.getSelection();
      console.log(selection);
      this.lastSelectionText = selection.toString().trim();
      lastEditRange = selection.getRangeAt(0);
      const {
        startContainer,
        endContainer,
        startOffset,
        endOffset,
      } = lastEditRange;
      if (startContainer !== endContainer) return;
      if (!lastEditRange.startContainer.parentElement.dataset.marked) return;
      if (startOffset !== endOffset) return;
      const map = {};
      const textContent = startContainer.textContent;
      for (let i = 0; i < textContent.length; i++) {
        map[i] = textContent[i];
      }
      this.currentInsertData = {
        startOffset,
        clickedText: map[startOffset],
        textContent,
      };
      this.dialogVisible = true;
    },
    distribute(attribute) {
      if (this.mouseType === 'left') {
        this.handMark(attribute);
      }
      if (this.mouseType === 'right') {
        this.insert(attribute);
      }
    },
    mouseup(event) {
      event.preventDefault();
      const type = event.button;
      if (type === 2) {
        return;
      }
      this.mouseType = 'left';
      selection = window.getSelection();
      this.lastSelectionText = selection.toString();
      lastEditRange = selection.getRangeAt(0);
      const {
        startContainer,
        endContainer,
        startOffset,
        endOffset,
      } = lastEditRange;
      if (startContainer !== endContainer) return;
      if (!lastEditRange.startContainer.parentElement.dataset.marked) return;
      this.currentSelectionData = {
        startContainer,
        endContainer,
        startOffset,
        endOffset,
      };

      this.dialogVisible = true;
    },
    insert(attribute) {
      const missingValue = this.missingValue;
      const position = this.position;
      const { startOffset, clickedText, textContent } = this.currentInsertData;
      const qt = this.QuestionTagging;
      const trimed = textContent.trim();
      const index = position;
      //console.log(startOffset,clickedText,index,textContent.trim())

      const sourc = qt[index].text;
      const prevNum = textContent.indexOf(sourc);
      let middleIndex = startOffset - prevNum;
      const startText = sourc.substring(0, middleIndex);
      const currentText = attribute;
      const endText = sourc.substring(middleIndex);
      const childQT = [
        { text: startText, attribute: '' },
        { text: missingValue, attribute: attribute, type: 'missingValue' },
        { text: endText, attribute: '' },
      ].filter((item) => item.text.trim());
      qt.splice(index, 1, ...childQT);

      this.dialogVisible = false;
    },
    handMark(attribute) {
      const position = this.position;
      const insertText = attribute;
      const lastSelectionText = this.lastSelectionText.trim();
      if (!lastSelectionText) return;
      const qt = this.QuestionTagging;
      const index = position;
      const sourc = qt[index].text;
      const { startContainer, startOffset } = this.currentSelectionData;
      const startIndex =
        startOffset - startContainer.textContent.indexOf(sourc);
      console.log(sourc, lastSelectionText);
      console.log(
        startOffset,
        sourc.indexOf(lastSelectionText),
        startContainer.textContent.indexOf(sourc)
      );
      const endIndex = startIndex + lastSelectionText.length;
      const startText = sourc.substring(0, startIndex);
      const currentText = sourc.substring(startIndex, endIndex);
      const endText = sourc.substring(endIndex);
      const childQT = [
        { text: startText, attribute: '' },
        { text: currentText, attribute: insertText },
        { text: endText, attribute: '' },
      ].filter((item) => item.text);
      qt.splice(index, 1, ...childQT);

      this.dialogVisible = false;
    },
    deleteMarked(index) {
      const qt = this.QuestionTagging;
      if (qt[index].type === 'missingValue') {
        qt.splice(index, 1);
      } else {
        qt[index].attribute = '';
        for (let i = 0; i < qt.length; i++) {
          if (qt[i].attribute) continue;
          if (!qt[i + 1]) continue;
          if (qt[i + 1].attribute) continue;
          qt[i].text = qt[i].text + qt[i + 1].text;
          qt.splice(i + 1, 1);
          i--;
        }
      }
    },
    setPosition(index) {
      this.position = index;
    },
  },
};
</script>

<style lang="less">
.edit-container {
  padding: 20px;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
  i {
    font-style: none;
  }
  [data-marked='true'] {
  }
  .mark-item {
    display: inline-flex;
    flex-direction: column;
    border: 2px solid #ff0000;
    text-align: center;
    position: relative;
    strong {
      background-color: #ff0000;
      color: #fff;
      font-size: 12px;
    }
    i {
      cursor: pointer;
      position: absolute;
      right: -10px;
      top: -10px;
      display: none;
    }
    &:hover {
      i {
        display: block;
      }
    }
  }
}
</style>
