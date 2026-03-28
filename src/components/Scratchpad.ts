
export class Scratchpad {
  private element: HTMLElement;
  private textarea: HTMLTextAreaElement;
  private isMinimized = false;
  private readonly STORAGE_KEY = 'z-monitor-scratchpad';

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'scratchpad minimized';
    this.isMinimized = true;

    const header = document.createElement('div');
    header.className = 'scratchpad-header';
    header.innerHTML = `
      <span class="scratchpad-title">\ud83d\udcd1 Scratchpad (ADHD)</span>
      <div class="scratchpad-actions">
        <button class="scratchpad-toggle">\u2212</button>
      </div>
    `;

    this.textarea = document.createElement('textarea');
    this.textarea.className = 'scratchpad-content';
    this.textarea.placeholder = 'Type anything here to keep track...';
    this.textarea.value = localStorage.getItem(this.STORAGE_KEY) || '';

    this.element.appendChild(header);
    this.element.appendChild(this.textarea);

    header.addEventListener('click', () => this.toggleMinimize());
    this.textarea.addEventListener('input', () => {
      localStorage.setItem(this.STORAGE_KEY, this.textarea.value);
    });

    const isInitiallyOpen = localStorage.getItem('z-monitor-scratchpad-open') === 'true';
    if (isInitiallyOpen) {
      this.element.classList.remove('minimized');
      this.isMinimized = false;
    }
  }

  public mount(container: HTMLElement): void {
    container.appendChild(this.element);
  }

  private toggleMinimize(): void {
    this.isMinimized = !this.isMinimized;
    this.element.classList.toggle('minimized', this.isMinimized);
    localStorage.setItem('z-monitor-scratchpad-open', String(!this.isMinimized));
  }
}
