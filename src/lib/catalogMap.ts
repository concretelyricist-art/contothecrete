// catalogMap.ts
export const catalogMap: Record<string, Record<string, string>> = {
	'Suit Chase': {
		S: 'CATALOG_ID_FOR_SUITCHASE_S',
		M: 'CATALOG_ID_FOR_SUITCHASE_M',
		XL: 'CATALOG_ID_FOR_SUITCHASE_XL',
		XXL: 'CATALOG_ID_FOR_SUITCHASE_XXL'
	},
	'Painted Face': {
		S: 'CATALOG_ID_FOR_PAINTEDFACE_S',
		M: 'CATALOG_ID_FOR_PAINTEDFACE_M',
		L: 'CATALOG_ID_FOR_PAINTEDFACE_L',
		XL: 'CATALOG_ID_FOR_PAINTEDFACE_XL'
	}
};

// src/lib/catalogMap.ts
export function lookupCatalogId(name: string, size: string): string | null {
	return catalogMap[name]?.[size] ?? null;
}
