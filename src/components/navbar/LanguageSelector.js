import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { makeStyles } from '@mui/styles';
import 'flag-icon-css/css/flag-icon.min.css';

const languageOptions = [
  { value: 'es', label: 'Español', icon: 'flag-icon-mx' },
  { value: 'en', label: 'English', icon: 'flag-icon-us' },
  { value: 'pt', label: 'Português', icon: 'flag-icon-pt' },
  { value: 'fr', label: 'Français', icon: 'flag-icon-fr' },
  { value: 'ja', label: '日本語', icon: 'flag-icon-jp' },
  { value: 'ko', label: '한국어', icon: 'flag-icon-kr' },
];

const useStyles = makeStyles((theme) => ({
  optionContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
  },
  optionLabel: {
    color: theme.palette.common.black,
    marginLeft: 8,
  },
}));

export default function LanguageSelector() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => languageOptions.find((option) => option.value === i18n.language) || languageOptions[0]
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.value);
  }, [i18n, selectedLanguage]);

  useEffect(() => {
    const option = languageOptions.find((option) => option.value === i18n.language);

    if (option) {
      setSelectedLanguage(option);
    }
  }, [i18n.language]);

  const handleChangeLanguage = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage);
  }

  const customOptionRenderer = ({ value, label, icon }) => (
    <div className={classes.optionContent}>
      <span className={`flag-icon ${icon}`} />
      <span className={classes.optionLabel}>{label}</span>
    </div>
  );

  return (
    <Select
      value={selectedLanguage}
      options={languageOptions}
      onChange={handleChangeLanguage}
      formatOptionLabel={customOptionRenderer}
      isSearchable={false}
      menuPortalTarget={document.body}
      styles={{
        control: (provided) => ({
          ...provided,
          border: 'none',
          minWidth: 140,
        }),
        valueContainer: (provided) => ({
          ...provided,
          flexWrap: 'nowrap',
        }),
        menuPortal: (provided) => ({
          ...provided,
          zIndex: 9999,
        }),
      }}
    />
  )
}