export type GTMEvent = {
  event: string;
  experimentId: string;
  action: string;
  variant: VariantType;
  label: string;
}

export type VariantType = 'A' | 'B';