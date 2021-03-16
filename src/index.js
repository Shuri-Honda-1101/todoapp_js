"use strict";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value; //add-textの値をinputTextに格納する
  document.getElementById("add-text").value = ""; //入力欄が空文字になり、何も文字がなくなる。

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.classList = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.textContent = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.textContent = "完了";
  completeButton.addEventListener("click", () => {
    //未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //divタグは使い回し、他の要素を変更していく
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //ToDo内容テキストを取得
    const text = addTarget.firstElementChild.textContent;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.textContent = text;

    //button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.textContent = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.textContent;

      //関数を再実行
      createIncompleteList(text);
    });

    //divに各要素を設定
    div.appendChild(li);
    div.appendChild(backButton);

    //divを完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });

  //button(削除)タグ完成
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
