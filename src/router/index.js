import { createRouter, createWebHistory } from 'vue-router';
import AdminPanelDashboard from '../views/AdminPanelDashboard.vue';
import AIGenreTransformation from '../views/AIGenreTransformation.vue';
import AIPoweredSmartContractAuditingSecurity from '../views/AIPoweredSmartContractAuditingSecurity.vue';
import BigScreenAndroidAppOverview from '../views/BigScreenAndroidAppOverview.vue';
import BigScreenHome from '../views/BigScreenHome.vue';
import BigScreenHomeScreen from '../views/BigScreenHomeScreen.vue';
import BigScreenTokenNativeCryptocurrency from '../views/BigScreenTokenNativeCryptocurrency.vue';
import BlockchainBasedContentLicensingAntiPiracy from '../views/BlockchainBasedContentLicensingAntiPiracy.vue';
import BSTTokenStakingRewards from '../views/BSTTokenStakingRewards.vue';
import CommunitySocialFeatures from '../views/CommunitySocialFeatures.vue';
import CreatorDashboard from '../views/CreatorDashboard.vue';
import CreatorMonetizationPages from '../views/CreatorMonetizationPages.vue';
import CrossChainCompatibilityOverview from '../views/CrossChainCompatibilityOverview.vue';
import DecentralizedAdNetworkTokenizedSponsorships from '../views/DecentralizedAdNetworkTokenizedSponsorships.vue';
import DecentralizedFilmFunding from '../views/DecentralizedFilmFunding.vue';
import DecentralizedGovernanceDAOVotingSystem from '../views/DecentralizedGovernanceDAOVotingSystem.vue';
import DiscoverHome from '../views/Discover.vue';
import DynamicGiftingSystem from '../views/DynamicGiftingSystem.vue';
import DynamicRevenueSharingforContentCreators from '../views/DynamicRevenueSharingforContentCreators.vue';
import FanEngagementInteractiveContent from '../views/FanEngagementInteractiveContent.vue';
import InteractiveStorytelling from '../views/InteractiveStorytelling.vue';
import LandingHome from '../views/LandingHome.vue';
import Layer2ScalingZeroKnowledgeProofs from '../views/Layer2ScalingZeroKnowledgeProofs.vue';
import LiveStreamingHub from '../views/LiveStreamingHub.vue';
import MediaPlayer from '../views/MediaPlayer.vue';
import MetaverseCinemas from '../views/MetaverseCinemas.vue';
import MonetizationWeb3IntegrationPages from '../views/MonetizationWeb3IntegrationPages.vue';
import MonetizationWeb3Tokenization from '../views/MonetizationWeb3Tokenization.vue';
import MovieTVShowDetailPage from '../views/MovieTVShowDetailPage.vue';
import MovieTVShowDetailStreamingHub from '../views/MovieTVShowDetailStreamingHub.vue';
import NFTBasedMovieOwnershipCollectibles from '../views/NFTBasedMovieOwnershipCollectibles.vue';
import NFTBasedTicketingExclusiveEventAccess from '../views/NFTBasedTicketingExclusiveEventAccess.vue';
import NonprofitImpactDashboard from '../views/NonprofitImpactDashboard.vue';
import ParentalControlDashboard from '../views/ParentalControlDashboard.vue';
import ProfileHome from '../views/ProfileHome.vue';
import SearchHome from '../views/SearchHome.vue';
import SecurityandPrivacyPages from '../views/SecurityandPrivacyPages.vue';
import SecurityModerationPrivacyDashboard from '../views/SecurityModerationPrivacyDashboard.vue';
import SecurityPrivacySettings from '../views/SecurityPrivacySettings.vue';
import SmartTVMobileAppInterface from '../views/SmartTVMobileAppInterface.vue';
import SocialCommunityPages from '../views/SocialCommunityPages.vue';
import SocialImpactNonprofitInitiatives from '../views/SocialImpactNonprofitInitiatives.vue';
import SocialMediaSharingViralContentDistribution from '../views/SocialMediaSharingViralContentDistribution.vue';
import UserFacingPages from '../views/UserFacingPages.vue';
import UserProfileWatchHistory from '../views/UserProfileWatchHistory.vue';
import WatchPage from '../views/WatchPage.vue';
import WatchtoEarnRewards from '../views/WatchtoEarnRewards.vue';
import Web3MarketplaceforDigitalMovieCollectibles from '../views/Web3MarketplaceforDigitalMovieCollectibles.vue';

const routes = [
  {
    path: '/admin-panel-dashboard',
    name: 'Admin-Panel-Dashboard',
    component: AdminPanelDashboard
  },
  {
    path: '/ai-genre-transformation',
    name: 'AI-Genre-Tranformation',
    component: AIGenreTransformation
  },
  {
    path: '/AI-Powered-Smart-Contract-Auditing-&-Security',
    name: 'AI-Powered-Smart-Contract-Auditing-&-Security',
    component: AIPoweredSmartContractAuditingSecurity
  },
  {
    path: '/Big-Screen-Android-App-Overview',
    name: 'Big-Screen-Android-App-Overview',
    component: BigScreenAndroidAppOverview
  },
  {
    path: '/Big-Screen-Home',
    name: 'Big-Screen-Home',
    component: BigScreenHome
  },
  {
    path: '/Big-Screen-Home-Screen',
    name: 'Big-Screen-Home-Screen',
    component: BigScreenHomeScreen,
  },
  {
    path: '/Big-Screen-Token-Native-Cryptocurrency',
    name: 'Big-Screen-Token-Native-Cryptocurrency',
    component: BigScreenTokenNativeCryptocurrency,
  },
  {
    path: '/Blockchain-Based-Content-Licensing-Anti-Piracy',
    name: 'Blockchain-Based-Content-Licensing-Anti-Piracy',
    component: BlockchainBasedContentLicensingAntiPiracy,
  },
  {
    path: '/BST-Token-Staking-Rewards',
    name: 'BST-Token-Staking-Rewards',
    component: BSTTokenStakingRewards,
  },
  {
    path: '/Community-Social-Features',
    name: 'Community-Social-Features',
    component: CommunitySocialFeatures,
  },
  {
    path: '/Creator-Dashboard',
    name: 'Creator-Dashboard',
    component: CreatorDashboard,
  },
  {
    path: '/Creator-Monetization-Pages',
    name: 'Creator-Monetization-Pages',
    component: CreatorMonetizationPages,
  },
  {
    path: '/Cross-Chain-Compatibility-Overview',
    name: 'Cross-Chain-Compatibility-Overview',
    component: CrossChainCompatibilityOverview,
  },
  {
    path: '/Decentralized-Ad-Network-Tokenized-Sponsorships',
    name: 'Decentralized-Ad-Network-Tokenized-Sponsorships',
    component: DecentralizedAdNetworkTokenizedSponsorships,
  },
  {
    path: '/Decentralized-Film-Funding',
    name: 'Decentralized-Film-Funding',
    component: DecentralizedFilmFunding,
  },
  {
    path: '/Decentralized-Governance-DAO-Voting-System',
    name: 'Decentralized-Governance-DAO-Voting-System',
    component: DecentralizedGovernanceDAOVotingSystem,
  },
  {
    path: '/Discover',
    name: 'Discover',
    component: DiscoverHome,
  },
  {
    path: '/Dynamic-Gifting-System',
    name: 'Dynamic-Gifting-System',
    component: DynamicGiftingSystem,
  },
  {
    path: '/Dynamic-Revenue-Sharing-for-Content-Creators',
    name: 'Dynamic-Revenue-Sharing-for-Content-Creators',
    component: DynamicRevenueSharingforContentCreators,
  },
  {
    path: '/Fan-Engagement-Interactive-Content',
    name: 'Fan-Engagement-Interactive-Content',
    component: FanEngagementInteractiveContent,
  },
  {
    path: '/Interactive-Storytelling',
    name: 'Interactive-Storytelling',
    component: InteractiveStorytelling,
  },
  {
    path: '/Landing-Home',
    name: 'Landing-Home',
    component: LandingHome,
  },
  {
    path: '/Layer-2-Scaling-Zero-Knowledge-Proofs',
    name: 'Layer-2-Scaling-Zero-Knowledge-Proofs',
    component: Layer2ScalingZeroKnowledgeProofs,
  },
  {
    path: '/Live-Streaming-Hub',
    name: 'Live-Streaming-Hub',
    component: LiveStreamingHub,
  },
  {
    path: '/Media-Player',
    name: 'Media-Player',
    component: MediaPlayer,
  },
  {
    path: '/Metaverse-Cinemas',
    name: 'Metaverse-Cinemas',
    component: MetaverseCinemas,
  },
  {
    path: '/Monetization-Web3-Integration-Pages',
    name: 'Monetization-Web3-Integration-Pages',
    component: MonetizationWeb3IntegrationPages,
  },
  {
    path: '/Monetization-Web3-Tokenization',
    name: 'Monetization-Web3-Tokenization',
    component: MonetizationWeb3Tokenization,
  },
  {
    path: '/Movie-TV-Show-Detail-Page',
    name: 'Movie-TV-Show-Detail-Page',
    component: MovieTVShowDetailPage,
  },
  {
    path: '/Movie-TV-Show-Detail-Streaming-Hub',
    name: 'Movie-TV-Show-Detail-Streaming-Hub',
    component: MovieTVShowDetailStreamingHub,
  },
  {
    path: '/NFT-Based-Movie-Ownership-Collectibles',
    name: 'NFT-Based-Movie-Ownership-Collectibles',
    component: NFTBasedMovieOwnershipCollectibles,
  },
  {
    path: '/NFT-Based-Ticketing-Exclusive-Event-Access',
    name: 'NFT-Based-Ticketing-Exclusive-Event-Access',
    component: NFTBasedTicketingExclusiveEventAccess,
  },
  {
    path: '/Nonprofit-Impact-Dashboard',
    name: 'Nonprofit-Impact-Dashboard',
    component: NonprofitImpactDashboard,
  },
  {
    path: '/Parental-Control-Dashboard',
    name: 'Parental-Control-Dashboard',
    component: ParentalControlDashboard,
  },
  {
    path: '/Profile-Home',
    name: 'Profile-Home',
    component: ProfileHome,
  },
  {
    path: '/Search-Home',
    name: 'Search-Home',
    component: SearchHome,
  },
  {
    path: '/Security-and-Privacy-Pages',
    name: 'Security-and-Privacy-Pages',
    component: SecurityandPrivacyPages,
  },
  {
    path: '/Security-Moderation-Privacy-Dashboard',
    name: 'Security-Moderation-Privacy-Dashboard',
    component: SecurityModerationPrivacyDashboard,
  },
  {
    path: '/Security-Privacy-Settings',
    name: 'Security-Privacy-Settings',
    component: SecurityPrivacySettings,
  },
  {
    path: '/Smart-TV-Mobile-App-Interface',
    name: 'Smart-TV-Mobile-App-Interface',
    component: SmartTVMobileAppInterface,
  },
  {
    path: '/Social-Community-Pages',
    name: 'Social-Community-Pages',
    component: SocialCommunityPages,
  },
  {
    path: '/Social-Impact-Nonprofit-Initiatives',
    name: 'Social-Impact-Nonprofit-Initiatives',
    component: SocialImpactNonprofitInitiatives,
  },
  {
    path: '/Social-Media-Sharing-Viral-Content-Distribution',
    name: 'Social-Media-Sharing-Viral-Content-Distribution',
    component: SocialMediaSharingViralContentDistribution,
  },
  {
    path: '/User-Facing Pages',
    name: 'User-Facing Pages',
    component: UserFacingPages,
  },
  {
    path: '/User-Profile-Watch-History',
    name: 'User-Profile-Watch-History',
    component: UserProfileWatchHistory,
  },
  {
    path: '/Watch-Page',
    name: 'Watch-Page',
    component: WatchPage,
  },
  {
    path: '/Watch-to-Earn-Rewards',
    name: 'Watch-to-Earn-Rewards',
    component: WatchtoEarnRewards,
  },
  {
    path: '/Web3-Marketplace-for-Digital-Movie-Collectibles',
    name: 'Web3-Marketplace-for-Digital-Movie-Collectibles',
    component: Web3MarketplaceforDigitalMovieCollectibles,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;