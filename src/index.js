"use strict";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  //add-textの値をinputTextに格納する
  document.getElementById("add-text").value = "";
  //入力欄が空文字になり、何も文字がなくなる。

  //div生成
  const div = document.createElement("div");
  div.classList = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.textContent = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.textContent = "完了";
  completeButton.addEventListener("click", () => {
    const move = document.querySelector(".move");
    document.querySelector("#complete-list").classList.toggle("move");
    document.querySelector("#incomplete-list").classList.toggle("move");
    move.appendChild(div);
  });

  //button(削除)タグ完成
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode; //親要素を取得
    document.getElementById("incomplete-list").removeChild(deleteTarget);
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
