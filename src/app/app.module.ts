import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    OurClientsComponent,
    OurPartnersComponent,
    ContactComponent,
    BulkSmsComponent,
    DocumentManagementDigitalLibraryComponent,
    SoftwareDevelopmentComponent,
    DataManagementComponent,
    SystemIntegrationComponent,
    ManagedServicesComponent,
    ItConsultingComponent,
    ItTrainingCertificationComponent,
    AnalyticsComponent,
    CyberSecurityComponent,
    ForensicComponent,
    VaptComponent,
    DataCenterDesignImplementationComponent,
    StructuredCablingComponent,
    CctvSurveillanceComponent,
    VideoConferencingComponent,
    WirelessNetworkingComponent,
    BuildingAutomationComponent,
    IndentifyAccessManagementComponent,
    IotComponent,
    ErpCustomizeSoftwareComponent
  ],
  imports: [
    CarouselModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
