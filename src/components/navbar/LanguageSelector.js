import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { makeStyles } from '@mui/styles';
import 'flag-icon-css/css/flag-icon.min.css';

const languageOptions = [
  { value: 'es', label: 'Español', icon: 'flag-icon-mx' },
  { value: 'en', label: 'English', icon: 'flag-icon-us'},
];

const useStyles = makeStyles((theme) => ({
  optionLabel: {
    color: theme.palette.common.black,
    marginLeft: 8,
  },
}));

export default function LanguageSelector() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  useEffect(() => {
    const { value } = selectedLanguage;

    i18n.changeLanguage(value);
  }, [i18n, selectedLanguage]);

  const handleChangeLanguage = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage);
  }

  const customOptionRenderer = ({ value, label, icon }) => (
    <div>
      <span className={`flag-icon ${icon}`}></span>
      <span className={classes.optionLabel}>{label}</span>
    </div>
  );

  return (
    <Select
      value={selectedLanguage}
      options={languageOptions}
      onChange={handleChangeLanguage}
      formatOptionLabel={customOptionRenderer}
      styles={{
        control: (provided) => ({
          ...provided,
          border: 'none',
        }),
      }}
    />
  )
}