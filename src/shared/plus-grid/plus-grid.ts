import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

/**
 * @children
 * Plus Grid Icon
 */
@Component({
	selector: "app-plus-grid-icon",
	standalone: true,
	imports: [NgClass],
	template: ` <svg
		viewBox="0 0 15 15"
		aria-hidden="true"
		class=""
		[ngClass]="['absolute size-[15px] fill-black/10', class(), yClass, xClass]"
	>
		<path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
	</svg>`,
})
export class PlusGridIcon {
	class = input<string>("");
	placement = input.required<
		"top left" | "top right" | "bottom left" | "bottom right"
	>();

	get yClass(): string {
		return this.placement()?.startsWith("top") ? "-top-2" : "-bottom-2";
	}

	get xClass(): string {
		return this.placement()?.endsWith("left") ? "-left-2" : "-right-2";
	}
}

/****END */

/**
 * @children
 * Plus Grid Icon
 */
@Component({
	selector: "app-plus-grid-row",
	standalone: true,
	imports: [NgClass],
	template: `<div
		[ngClass]="[
			'group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]',
			class()
		]"
	>
		<div
			aria-hidden="true"
			class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
		>
			<div class="absolute inset-x-0 top-0 border-t border-black/5"></div>
			<div class="absolute inset-x-0 top-2 border-t border-black/5"></div>
			<div
				class="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"
			></div>
			<div
				class="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"
			></div>
		</div>
		<ng-content></ng-content>
	</div> `,
})
export class PlusGridRow {
	class = input<string>("");
}

/**END */

/**
 * @children
 * Plus Grid Icon
 */
@Component({
	selector: "app-plus-grid-item",
	standalone: true,
	imports: [PlusGridIcon],
	template: `
		<div class="group/item relative">
			<app-plus-grid-icon
				placement="top left"
				class="hidden group-first/item:block"
			></app-plus-grid-icon>

			<app-plus-grid-icon placement="top right" />

			<app-plus-grid-icon
				placement="bottom left"
				class="hidden group-first/item:group-last/row:block"
			/>

			<app-plus-grid-icon
				placement="bottom right"
				class="hidden group-last/row:block"
			/>
			<ng-content></ng-content>
		</div>
	`,
})
export class PlusGridItem {
	class = input<string>("");
}

/**END */

/**
 * @Main Parent
 */
@Component({
	selector: "app-plus-grid",
	standalone: true,
	imports: [NgClass],
	templateUrl: "./plus-grid.html",
	styleUrl: "./plus-grid.scss",
})
export class PlusGrid {
	class = input<string>("");
}
