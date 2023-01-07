export type UnitIdentifier =
  "" |
  "cup" |
  "deciliter" |
  "gram" |
  "jar" |
  "kilogram" |
  "liter" |
  "milligram" |
  "milliliter" |
  "ounce" |
  "pack" |
  "pinch" |
  "pound" |
  "tsp" |
  "tbsp" |
  "twig";

export interface UnitReplacementFactor {
  generic: string
}

/**
 * Try to convert the amount from the given unit to the target unit, in case the conversion is not supported null is returned
 *
 * @param amount Amount to convert
 * @param sourceUnit Source unit
 * @param targetUnit Target unit to be converted to
 */
export const convertAmount = (amount: number, sourceUnit: UnitIdentifier, targetUnit: UnitIdentifier) => {
  const conversionFactor = unitConversionFactor[sourceUnit].conversions[targetUnit];
  return conversionFactor ? amount * conversionFactor : null;
};

/**
 * Calculates the utilization.
 *
 * Return values:
 *
 * => -1    - can not be calculated
 *
 * =>  0    - not utilized
 *
 * =>  1    - fully utilized
 *
 * => 0..1  - utilization as percentage
 *
 * @param fullAmount Full amount required
 * @param fullAmountUnit Unit of full amount
 * @param givenAmount Given amount that we have
 * @param givenAmountUnit Amount of the given amount
 */
export const calculateUtilization = (fullAmount: number, fullAmountUnit: UnitIdentifier, givenAmount: number, givenAmountUnit: UnitIdentifier) => {
  if (fullAmount == 0 || givenAmount == 0) {
    return 0;
  }

  const convertedFullAmount = convertAmount(fullAmount, fullAmountUnit, givenAmountUnit) ?? -1;
  if (convertedFullAmount == -1) {
    return -1;
  }

  if (givenAmount >= convertedFullAmount) {
    return 1;
  }

  return givenAmount / convertedFullAmount;
};

/**
 * @internal
 */
export const unitConversionFactor: {
  [key in UnitIdentifier]: {
    estimated: boolean
    conversions: { [key in UnitIdentifier]?: number }
  }
} = {
  "": {
    conversions: {},
    estimated: true,
  },
  cup: {
    conversions: {
      gram: 125,
      kilogram: 0.125,
      milliliter: 240,
    },
    estimated: false,
  },
  deciliter: {
    conversions: {
      liter: 0.1,
      milliliter: 100,
    },
    estimated: false,
  },
  gram: {
    conversions: {
      kilogram: 0.001,
      milligram: 1_000,
    },
    estimated: false,
  },
  jar: {
    conversions: {
      gram: 200,
      milliliter: 200,
    },
    estimated: true,
  },
  kilogram: {
    conversions: {
      gram: 1_000,
      milligram: 1_000_000,
    },
    estimated: false,
  },
  liter: {
    conversions: {
      deciliter: 10,
      milliliter: 1_000,
    },
    estimated: false,
  },
  milligram: {
    conversions: {
      gram: 0.001,
      kilogram: 0.00000100,
    },
    estimated: false,
  },
  milliliter: {
    conversions: {
      deciliter: 0.01,
      liter: 0.001,
    },
    estimated: false,
  },
  ounce: {
    conversions: {
      gram: 28.3495,
      kilogram: 0.0283495,
      liter: 0.0295735,
      milligram: 2_8349.5,
      milliliter: 295_735_000.0000136,
    },
    estimated: false,
  },

  pack: {
    conversions: {},
    estimated: true,
  },
  pinch: {
    conversions: {
      gram: 0.04,
      kilogram: 0.004,
      milligram: 4_000,
    },
    estimated: false,
  },
  pound: {
    conversions: {
      gram: 453.592,
      kilogram: 0.453592,
    },
    estimated: false,
  },
  tbsp: {
    conversions: {
      gram: 10,
      kilogram: 0.01,
      liter: 0.015,
      milligram: 10_000,
      milliliter: 15,
    },
    estimated: true,
  },
  tsp: {
    conversions: {
      gram: 3,
      kilogram: 0.0003,
      liter: 0.0005,
      milligram: 3_000,
      milliliter: 5,
    },
    estimated: true,
  },
  twig: {
    conversions: {
      gram: 30,
    },
    estimated: true,
  },
};
