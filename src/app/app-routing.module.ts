import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { ContactComponent } from './contact/contact.component';
import { BulkSmsComponent } from './bulk-sms/bulk-sms.component';
import { DocumentManagementDigitalLibraryComponent } from './document-management-digital-library/document-management-digital-library.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { SystemIntegrationComponent } from './system-integration/system-integration.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { ItTrainingCertificationComponent } from './it-training-certification/it-training-certification.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { ForensicComponent } from './forensic/forensic.component';
import { VaptComponent } from './vapt/vapt.component';
import { DataCenterDesignImplementationComponent } from './data-center-design-implementation/data-center-design-implementation.component';
import { StructuredCablingComponent } from './structured-cabling/structured-cabling.component';
import { CctvSurveillanceComponent } from './cctv-surveillance/cctv-surveillance.component';
import { VideoConferencingComponent } from './video-conferencing/video-conferencing.component';
import { WirelessNetworkingComponent } from './wireless-networking/wireless-networking.component';
import { BuildingAutomationComponent } from './building-automation/building-automation.component';
import { IndentifyAccessManagementComponent } from './indentify-access-management/indentify-access-management.component';
import { IotComponent } from './iot/iot.component';
import { ErpCustomizeSoftwareComponent } from './erp-customize-software/erp-customize-software.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-clients', component: OurClientsComponent },
  { path: 'our-partners', component: OurPartnersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bulk-sms', component: BulkSmsComponent },
  { path: 'document-management-digital-library', component: DocumentManagementDigitalLibraryComponent },
  { path: 'software-development', component: SoftwareDevelopmentComponent },
  { path: 'data-management', component: DataManagementComponent },
  { path: 'system-integration', component: SystemIntegrationComponent },
  { path: 'managed-services', component: ManagedServicesComponent },
  { path: 'it-consulting', component: ItConsultingComponent },
  { path: 'it-training-certification', component: ItTrainingCertificationComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'cyber-security', component: CyberSecurityComponent },
  { path: 'forensic', component: ForensicComponent },
  { path: 'vapt', component: VaptComponent },
  { path: 'data-center-design-implementation', component: DataCenterDesignImplementationComponent },
  { path: 'structured-cabling', component: StructuredCablingComponent },
  { path: 'cctv-surveillance', component: CctvSurveillanceComponent },
  { path: 'video-conferencing', component: VideoConferencingComponent },
  { path: 'wireless-networking', component: WirelessNetworkingComponent },
  { path: 'building-automation', component: BuildingAutomationComponent },
  { path: 'identify-access-management', component: IndentifyAccessManagementComponent },
  { path: 'iot', component: IotComponent },
  { path: 'erp-customize-software', component: ErpCustomizeSoftwareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
