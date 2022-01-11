import {SERVICE_DESK_URL} from 'shared/constants';

export default function matcher(window: Window) {
  if (!window.location.href.startsWith(`${SERVICE_DESK_URL}/ticket`)) return;
  if (document.getElementById('sys_display.incident.category')?.getAttribute('value') !== 'Employee offboarding') return;
  return true;
}
