// bodyのIDがtopだった時にだけ処理
if (window.document.body.id === 'top') {
  let selectElement = document.getElementById("select_age");
  for (let i = 1; i <= 100; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    selectElement.appendChild(option);
  };
};


// 各変数を定義する
let hostData = [];

// searchボタンをクリックした時の処理
$("#search_btn").on('click', function () {
  let sexValue = document.getElementById("select_sex");
  let sexValue_idx = sexValue.selectedIndex;
  let sexValue_txt = sexValue.options[sexValue_idx].text;

  let ageValue = document.getElementById("select_age");
  let ageValue_idx = ageValue.selectedIndex;
  let ageValue_txt = ageValue.options[ageValue_idx].text;

  let numValue = document.getElementById("select_num");
  let numValue_idx = numValue.selectedIndex;
  let numValue_txt = numValue.options[numValue_idx].text;

  hostData.push(sexValue_txt);
  hostData.push(ageValue_txt);
  hostData.push(numValue_txt);

  // Local Storageへ保存する
  localStorage.setItem('hostData', JSON.stringify(hostData));
});



// searchhost.htmlでデータを受け取る
let hostarray = localStorage.getItem('hostData');
let hostProfile = JSON.parse(hostarray); // console.log(hostProfile); 確認用


  function hostProfiles() {
    if (hostData[0] = "male") {
      if (hostData[2] = "1") {
        console.log("男で一人だ!");
      } else if (hostData[2] !== '1') {
        console.log("男で複数だ!");
      }
    } else if (hostData[0] = "female") {
      if (hostData[2] = "1") {
        console.log("女で一人だ!");
      } else if (hostData[2] !== '1') {
        console.log("女で複数だ!");
      };
    };
  };
  hostProfiles();


// 残課題
// searchhost.htmlへ遷移後にconsole.logを処理したいが、topページ段階で読み込んでしまう⇨サーバーを持つ事で解決するのだろうか？