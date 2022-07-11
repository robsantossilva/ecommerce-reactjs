import { Global, Module } from '@nestjs/common';
import { TenantGuard } from './tenant.guard';
import { TenantService } from './tenant/tenant.service';

@Global()
@Module({
  providers: [TenantService, TenantGuard],
  exports: [TenantService],
})
export class TenantModule {}
