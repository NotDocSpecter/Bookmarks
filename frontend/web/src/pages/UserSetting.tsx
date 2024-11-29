import AccessTokenSection from "@/components/setting/AccessTokenSection";
import AccountSection from "@/components/setting/AccountSection";
import PreferenceSection from "@/components/setting/PreferenceSection";

const Setting: React.FC = () => {
  return (
    <div className="mx-auto max-w-8xl w-full px-4 sm:px-6 md:px-12 py-6 flex flex-col justify-start items-start gap-y-12">
      <AccountSection />
      <AccessTokenSection />
      <PreferenceSection />
    </div>
  );
};

export default Setting;
