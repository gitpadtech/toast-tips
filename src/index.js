import './index.scss';

/**
 * toast tips like android or ios
 * @param {string} tips
 */
export default function toastTips(tips) {
  let $c = document.createElement('div');
  $c.classList.add('toast-tips-container');
  let $toast = document.createElement('div');
  $toast.classList.add('toast-tips');
  $toast.classList.add('start');
  $toast.innerText = tips;
  $c.appendChild($toast);
  let height = document.documentElement.clientHeight;
  document.body.appendChild($c);
  $c.style.top = `${height / 2 - $toast.clientHeight / 2}px`;

  $toast.style.opacity = 0;
  setTimeout(() => {
    $toast.style.opacity = 1;
  }, 0);
  setTimeout(() => {
    $toast.style.opacity = 0;
  }, 2000);
  setTimeout(() => {
    document.body.removeChild($c);
  }, 3000);
}