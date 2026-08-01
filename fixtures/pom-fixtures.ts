import { test as base, Page } from '@playwright/test';
import { PoManager } from '../pages/PoManager';

type TestFixtures = {
  poManager: PoManager;
};

export const test = base.extend<TestFixtures>({
  poManager: async ({ page }: { page: Page }, use: (r: PoManager) => Promise<void>) => {
    const poManager = new PoManager(page);
    await use(poManager);
  },
});

export { expect } from '@playwright/test';
