import React from 'react'
import Select from 'react-select'

const SelectBox = React.forwardRef(({
    children,
    className,
    options = [],
    isSearchable = false,
    isMulti = false,
    indicator,
    ...restProps
}, ref) => {
    return (
        <>
            <Select
                ref={ref}
                options={options}
                className={`${className} undefined`}
                isSearchable={isSearchable}
                isMulti={isMulti}
                components={{
                    IndicatorSeparator: () => null,
                    ...(indicator && { DropdownIndicator: () => indicator })
                }}
                styles={{
                    indicatorContainer: (provided) => ({
                        ...provided,
                        padding: undefined,
                        flexShrink: undefined,
                        width: "max-content",
                        "& > div": { padding: 0 }
                    }),
                    container: (provided) => ({
                        ...provided,
                        zIndex: 0,
                        alignItems: "center",
                    }),
                    control: (provided) => ({
                        ...provided,
                        bakgroundColor: "transparent",
                        border: "0 !important",
                        boxShadow: "none !important",
                        minHeight: "auto",
                        width: "100%",
                        flexWrap: undefined,
                        "&:hover": {
                            border: "0 !important",
                        }
                    }),
                    input: (provided) => ({
                        ...provided,
                        color: 'inherit'
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        dispay: 'flex',
                        minWidth: 'max-content',
                        width: '100%',
                        bakgroundColor: state.isSelected ? '#ffefe7' : 'transparent',
                        color: state.isSelected ? '#2f2f2f' : 'inherit',
                        '&:hover': {
                            backgroundColor: '#ffefe7',
                            color: '#2f2f2f'
                        }
                    }),
                    singleValue: (provided) => ({
                        ...provided,
                        dispay: 'flex',
                        marginLeft: undefined,
                        marginRight: undefined,
                    }),
                    valueContainer: (provided) => ({
                        ...provided,
                        padding: 0,
                        dispaly: 'flex',
                        flexWrap: undefined
                    }),
                    placeholder: (provided) => ({
                        ...provided,
                        margin: 0
                    }),
                    menuPortal: (base) => ({
                        ...base,
                        zIndex: 999999
                    }),
                    menu: (base) => ({
                        ...base,
                        minWidth: 'max-content',
                        width: 'max-content'
                    }),
                }}
                menuPortalTarget={document.body}
                closeMenuOnScroll={(event) => {
                    return event.target.id === 'scrollContainer'
                }}
                {...restProps}
            />
            {children}
        </>
    )
})

export default SelectBox