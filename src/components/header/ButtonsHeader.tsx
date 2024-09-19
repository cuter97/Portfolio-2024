import { Github, Linkedin, FileText } from "lucide-react";
import { ButtonType } from "../ui/Button-type";
import { useTranslations } from "next-intl";

export const ButtonsHeader = () => {
    const t = useTranslations('Header.btnHeader');
    return (
        <div className="grid grid-flow-col auto-cols-max gap-2 mb-6 ">
            <ButtonType type="email" name={t("btnEmail")} />
            <ButtonType type="link" name="GitHub" link="https://github.com/cuter97" Icon={<Github />} />
            <ButtonType type="link" name="Linkedin" link="https://github.com/cuter97" Icon={<Linkedin />} />
            <ButtonType type="cv" name={t("btnCv")} Icon={<FileText />}/>
        </div>
    )
}
