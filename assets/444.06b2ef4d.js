const a=[.48,.14,-.15,-.05,-.07,.34,-.06,.33,.42,.04,.19,.09,-.26,.03,.26,.1,.19,-.03,-.22,.39,.05,.12,-.12,.34,.34,.17,.06,-.28,.01,.02,-.03,.04,.03,.33,-.03,.16,.13,.32,-.09,-.02,.21,.13,-.03,.12,-.2,.32,.04,.32,.24,-.02,.26,.43,0,.06,-.14,.37,.27,.37,-.06,.04,-.08,-.01,0,.1,.18,-.03,.07,.29,.29,.07,-.03,.17,-.07,-.26,.1,.14,.25,-.05,-.08,.11,.13,.04,.11,.16,-.02,-.11,.23,-.03,.03,.08,-.23,-.13,.23,.02,.21,-.28,.03,.32,-.05,.03,-.03,.05,-.09,-.08,-.11,-.09,.23,.18,.17,-.19,.31,-.12,-.1,.19,-.02,.12,-.16,.07,.06,.36,-.12,.02,.28,.08,.18,.04,-.05,.11,-.05,.09,.03,.03,.04,-.15,.16,.35,-.15,-.31,0,.47,-.06,.49,.11,.29,.55,.2,.18,-.06,.03,.03,.02,.27,.07,.28,.26,-.24,.15,.37,.09,.35,-.19,-.14,-.18,-.15,.31,-.03,-.2,.05,-.06,.17,.58,-.03,.02,.06,-.03,.06,.05,.11,.02,.03,.12,.14,-.23,-.13,-.2,-.28,.23,.14,-.13,.1,.06,.12,-.27,.19,-.06,-.09,-.29,.1,.25,0,.42,.08,.09,.17,.09,-.29,.07,-.11,-.19,-.3,.14,.3,.12,.22,.37,-.05,-.07,.17,.09,.21,-.13,-.17,-.3,.03,-.06,.07,.07,-.01,.01,-.01,.07,-.2,.27,-.23,-.35,.56,.21,.41,-.13,.09,-.07,.24,.15,-.1,.29,.18,-.08,.17,.16,.01,-.07,-.02,-.17,-.16,-.07,-.02,-.29,.27,-.08,-.1,.08,-.34,.15,-.07,-.19,-.12,0,.15,.2,.66,.16,.3,.07,-.17,.01,-.07,.06,.11,-.12,.24,-.15,.16,.4,-.05,-.17,-.01,.02,.25,.03,0,.08,-.31,0,.2,.1,-.08,.36,.23,.1,-.25,.09,-.11,-.01,.07,.12,.13,-.18,-.14,-.29,.35,.16,-.24,-.22,.53,-.2,-.25,-.13,-.3,-.19,-.34,.1,0,.31,0,-.1,-.14,.06,-.1,.07,-.15,.11,.03,.03,-.23,-.05,.07,.06,-.08,.27,-.01,.11,-.21,-.09,.17,.08,-.24,-.06,-.18,-.12,-.03,-.04,.14,.32,-.13,.35,.35,-.13,-.16,-.21,-.11,.69,-.14,-.22,.11,-.04,.23,.35,.05,-.2,-.11,.18,-.08,.49,.11,-.1,.1,.12,.13,.07,-.15,.19,-.02,.05,.06,-.09,-.04,-.14,-.14,-.16,-.1,-.18,-.44,.05,-.01,.05,-.11,.12,-.06,-.06,.09,-.11,-.05,-.21,.45,-.23,-.24,.27,-.26,-.11,-.15,-.24,.04,-.31,-.17,-.08,.15,-.05,.01,-.12,-.11,.37,-.05,.17,-.28,.47,.11,-.06,-.35,-.08,-.1,.04,.06,.43,.16,-.11,.09,.26,-.02,0,.08,-.16,.23,.15,1,-.05,-.11,-.07,-.05,.86,.29,.07,-.05,.01,-.21,.03,-.27,-.02,.09,.17,.07,-.06,-.06,.18,.04,-.08,-.1,-.13,-.02,.06,.05,.21,.09,.24,.46,-.25,.1,0,.31,-.11,.14,-.1,.23,-.14,.35,-.05,-.15,-.07,-.12,.03,-.24,0,.09,.3,-.21,-.06,.13,-.14,.01,-.02,-.15,-.12,.03,-.15,.25,.14,-.09,-.16,-.02,-.08,-.2,-.1,.01,.1,-.17,-.09,-.01,.12,.07,.08,.16,-.15,-.15,-.34,-.16,-.25,.55,.03,.07,.21,.07,-.04,-.1,-.01,-.01,.52,.41,-.23,-.16,-.12,.11,.03,-.35,-.4,.04,.03,0,.12,.01,-.07,.05,-.08,.09,-.08,-.14,.21,-.34,-.04,-.02,.01,.11,-.15,.06,.19,.24,.21,-.04,-.05,-.23,.02,-.12,-.22,-.15,.48,.11,-.04,-.06,-.19,-.09,-.25,-.04,.09,.41,-.04,-.09,-.12,.23,-.07,-.1,.16,.11,.08,-.03,-.01,-.22,.17,.12,-.02,-.09,.23,-.04,-.04,.15,-.14,.23,.02,-.06,-.21,.04,.17,.07,-.08,.23,-.37,.15,-.34,.26,-.13,.2,0,.36,-.04,.1,-.17,-.02,-.25,.16,.23,-.33,-.11,.18,-.11,.3,-.08,-.12,-.14,.02,.1,-.06,.07,-.14,-.1,.08,.09,-.19,.13,-.01,-.16,.09,-.32,-.15,.35,.12,-.02,-.04,.09,.15,.27,.09,-.16,.09,-.08,-.16,.07,-.19,-.15,.19,.1,-.21,.36,.25,.37,.1,-.03,.02,-.06,-.3,-.06,.07,.04,.09,.13,-.15,-.09,.19,.08,.27,.22,.16,.11,.24,.23,.05,-.29,-.39,.4,.3,.22,.14,-.06,.2,.09,.31,.37,-.18,-.07,-.11,.08,0,.38,.06,.04,-.09,.05,.02,-.22,0,.47,-.25,.05,-.03,.35,-.16,.15,-.16,.08,-.35,-.11,-.05,.37,-.14,.29,-.05,-.12,-.16,.03,-.22,.13,-.07,-.31,-.26,.19,-.21,.01,.04,.16,.34,.43,.09,.15,.1,.42,-.13,-.01,.42,.07,-.06,-.16,.17,.03,-.11,-.3,-.08,.13,.01,.04,.15,-.05,-.43,.29,.55,-.3,-.29,-.08,.6,-.25,.38,-.1,.37,-.04,-.24,-.18,-.08,.15,.04,-.23,-.2,-.18,-.03,-.23,-.11,.06,-.07,-.25,.3,.05,-.02,-.17,.19,-.02,-.39,.38,.25,-.05,-.08,.23,.11,.22,-.14,-.14,-.04,-.05,-.24,-.12,.05,-.03,-.08,-.05,.12,-.02,.04,.29,.85,.16,-.17,.01,.01,.19,.03,.02,.18,-.28,.07,-.02,-.14,-.28,.15,.22,-.27,.37,-.01,-.26,.11,-.28,-.08,.05,-.15,.25,.16,.11,.17,.09,.07,.44,0,-.07,-.3,-.16,-.3,.26,.04,.19,.11,-.16,-.08,-.15,-.23,.05,.39,.18,.15,.11,.16,-.02,-.25,-.23,-.22,.01,-.09,.09,.47,.05,.09,-.06,-.03,.01,.12,-.17,.21,-.13,.27,-.04,-.3,-.1,-.05,-.07,-.33,.07,-.25,-.11,.14,-.09,.18,-.08,.05,.55,.19,.83,-.22,.38,-.01,.44,.05,-.05,-.04,-.12,-.12,.08,-.11,-.05,.03,-.14,.05,-.02,.2,-.15,-.06,.46,-.01,-.04,-.26,.1,-.18,-.05,.13,.06,.01,0,-.08,.17,.03,.34,-.27,-.24,.07,-.06,-.34,.36,-.03,0,.21,.15,-.01,-.17,-.18,.09,.31,.01,-.3,.12,-.22,.17,.02,.33,-.16,-.12,.09,-.01,-.06,-.01,.12,-.2,-.05,.26,.21,.11,.2,-.04,-.29,-.06,-.08,.03,.13,.01,.26,-.04,.01,-.16,.4,.45,.04,-.14,0,-.08,.1,.07,-.13,0,.2,-.01,-.15,.07,-.2,-.17,.03,.21,.19,.4,.08,-.21,.2,.27,.23,-.08,.04,.05,-.04,.18,.24,-.18,.09,.14,-.43,.19,-.19,.12,-.24,-.07,.04,.48,-.13,-.26,-.12,0,-.16,-.02,.12,.15,.1,.11,.02,-.14,-.05,-.05,-.09,.19,-.27,.14,.08,-.05,-.03,-.11,.09,-.06,-.16,-.01,.23,.06,.12,-.3,.12,.06,.44,.04,.26,-.05,-.02,.02,.32,-.15,.04,-.09,.36,.15,-.15,-.08,.1,-.02,-.09,.12,.1,.47,-.05,.08,-.07,.07,.08,.14,-.14,.07,.26,.12,-.22,-.07,-.07,-.22,-.02,.17,-.18,-.01,-.05,.34,.03,.12,.63,-.14,.57,-.06,-.14,-.08,.02,-.45,-.1,-.13,-.13,.06,-.13,.03,.31,-.06,.03,-.03,.22,.34,.13,-.02,.16,.12,.1,-.2,.2,-.14,-.07,-.02,-.12,.22,-.05,.11,-.11,.56,.01,.13,.09,.01,-.01,0,.55,.17,-.24,-.1,.26,.21,.16,.24,-.17,-.12,-.3,.55,-.01,.26,.57,.37,.01,.39,-.07,-.01,-.17,-.02,.16,-.17,.09,-.3,.18,-.12,-.23,-.02,-.1,.1,.13,.23,.28,-.18,-.09,.13,-.15,-.02,.38,0,.1,.2,-.19,.05,0,.03,-.2,-.09,.34,-.01,-.1,-.22,-.24,.05,.2,.34,-.11,-.15,-.13,-.13,-.12,-.1,.06,-.17,.27,-.29,.08,.1,-.34,.92,.08,.01,-.32,-.03,.19,-.03,.56,.54,-.05,0,.13,-.17,-.21,0,-.13,-.14,-.1,-.06,.2,.15,.17,.24,.54,.12,.07,-.1,.02,.56,.12,.35,.03,.06,.44,-.01,.1,.33,-.11,.34,.87,-.05,-.12,.24,-.17,.24,-.07,.86,0,-.13,.04,-.05,-.07,.16,.46,-.02,.06,-.03,.26,-.14,.1,-.1,.25,.19,-.15,.03,.26,.25,.29,.52,.52,-.12,0,.25,.38,-.25,.33,-.01,.1,-.22,-.13,-.17,-.22,.16,-.16,.12,.29,.85,-.02,.08,.14,.08,-.11,.09,.16,-.25,-.09,.01,-.01,-.25,-.36,.02,.02,.08,.47,.05,-.09,-.2,-.06,-.19,-.49,-.09,-.04,-.21,.11,.07,-.13,-.24,.11,.04,.19,.06,.25,-.12,-.01,.2,-.33,.66,.2,0,-.1,-.07,-.06,.29,-.03,-.09,-.17,-.15,.04,-.4,-.13,-.22,-.08,-.41,-.15,-.13,-.02,-.48,-.05,-.08,-.04,0,-.14,-.15,-.01,-.14,.01,-.16,.16,-.28,-.09,.02,-.16,.01,.02,.09,-.05,-.07,-.04,-.11,-.08,-.26,.02,-.07,-.06,-.02,-.19,.09,-.14,.13,-.05,-.07,.9,-.06,-.02,-.22,-.17,-.04,-.16,.05,.27,.54,-.15,.09,.17,-.23,-.11,.36,-.03,.05,.2,-.18,-.03,-.14,-.04,.24,.26,.08,.05,.32,.21,-.07,.19,.02,.23,.25,.03,-.02,-.2,.17,.28,.16,.38,-.06,-.37,-.17,.16,-.03,.16,.37,-.08,.17,-.1,.21,-.16,.35,.1,.02,.37,.14,.1,-.09,.06,-.01,-.08,-.12,-.25,.22,.2,-.09,-.05,-.12,.02,-.17,-.14,-.15,.24,.01,.14,-.07,-.04,-.1,-.19,-.05,-.21,-.1,-.16,-.22,-.13,-.14,0,-.1,.03,-.06,-.05,-.08,-.02,.03,-.13,-.15,.06,.16,-.04,0,.1,.27,.03,.07,-.13,0,-.22,.17,-.02,-.33,.59,.27,.29,.35,-.16,-.27,-.28,.11,-.04,-.17,.13,-.23,-.19,-.05,.2,.07,-.19,-.07,.55,.11,.08,-.18,.07,-.12,.1,-.14,.13,-.18,-.13,0,-.12,-.13,-.13,-.22,-.17,-.2,.28,-.28,.24,.23,-.21,.08,.3,-.05,-.19,.49,-.21,.02,-.01,-.21,.09,-.18,-.05,-.27,.42,-.08,.06,-.02,-.05,.28,-.18,-.09,-.17,.33,.05,.56,.01,-.15,.07,-.16,.24,-.08,-.08,-.18,-.06,-.17,.2,-.14,.31,-.23,.1,.02,.13,.05,-.17,.63,.05,.02,-.07,.17,.33,.02,-.05,.03,-.19,-.01,-.1,.19,.15,-.11,.34,.04,-.21,-.24,.63,.31,.04,-.09,-.06,-.16,-.1,.25,-.01,.07,-.02,.64,-.17,-.25,.15,.12,.18,-.12,-.1,.08,.18,-.18,-.3,-.18,-.21,.19,-.1,.17,.15,-.2,.94,.15,-.15,.01,-.16,-.05,.11,-.25,.15,-.14,-.15,-.2,-.16,-.19,.11,-.08,-.19,-.12,.02,-.12,-.21,-.11,.04,-.02,-.22,-.17,-.17,-.21,.03,.36,.03,-.04,-.06,-.11,-.08,-.14,-.08,-.08,.03,-.03,.35,.12,-.1,.13,.26,-.1,.15,-.18,-.01,-.08,.06,.16,.03,-.13,.31,-.19,-.03,.25,.25,.21,.18,.03,-.14,.02,0,.16,-.16,.03,.07,-.07,-.13,-.19,-.07,-.12,-.08,.27,.23,-.22,.11,.35,.11,-.07,.17,.24,.32,-.4,.13,-.05,-.03,.04,-.2,-.08,-.09,-.07,.09,-.2,-.09,.6,-.08,-.11,-.2,-.18,-.11,-.12,.14,-.01,-.15,.09,-.1,-.03,-.01,.1,-.07,.24,.3,.02,-.23,.4,.2,-.05,-.19,-.05,.04,-.02,.13,-.14,-.15,-.3,.16,-.07,.59,-.2,.16,.02,.32,.27,-.11,-.09,.03,-.11,.39,.04,-.21,-.03,-.17,.07,.37,.07,-.07,.09,.08,-.22,-.06,-.09,-.12,.01,-.12,-.17,.01,.23,-.14,.24,-.08,-.09,.07,.31,.03,.03,-.19,-.01,.08,-.2,.14,-.24,-.01,-.12,-.09,-.34,-.1,.17,-.07,.1,-.06,.02,-.35,-.17,-.07,-.19,-.24,-.07,.04,-.12,.54,.54,.16,.02,.06,.11,-.04,-.26,.22,.14,-.12,.2,-.08,.14,.2,.08,.03,-.35,.14,-.33,.14,.14,.06,-.11,.24,-.07,.22,-.47,-.1,-.12,0,-.15,-.03,.15,-.05,.15,-.11,.1,-.16,-.02,-.14,.14,.12,.04,-.27,.24,-.26,-.24,.23,-.08,-.07,-.09,-.29,-.07,.02,.13,-.16,.04,.57,.23,.08,.14,-.13,-.32,.2,0,.13,-.01,.06,-.02,.14,.21,-.04,-.17,-.09,-.04,-.04,.08,.27,.21,-.11,.16,-.05,-.17,.02,.2,-.29,-.28,.05,-.2,.37,-.25,.03,.26,.1,-.21,-.01,.15,-.07,-.18,0,.54,.23,-.21,-.21,.12,-.01,-.25,.08,-.16,-.09,.08,.13,.02,-.38,.04,-.09,.09,-.41,.04,.13,.14,.31,.15,.17,.08,.35,.05,-.04,.06,.23,.16,.32,-.14,-.03,.26,.25,-.16,-.14,-.06,.2,-.04,-.06,.09,-.04,-.2,.17,-.01,.03,-.35,.2,.2,.23,.05,0,-.07,-.07,.41,-.15,-.24,.16,-.02,-.3,.16,.09,.13,-.12,.01,.23,-.02,-.11,-.14,.06,.26,.17,-.25,.29,-.03,.1,.13,.16,.13,.08,.1,-.23,.02,.19,.14,.22,.05,.05,-.07,-.1,-.05,-.15,-.09,.1,.54,-.1,.03,-.04,-.12,.06,.06,.01,.08,.13,0,-.03,-.03,-.07,-.11,.18,.07,-.15,.09,.17,0,-.25,.39,.2,.07,-.18,.02,.56,-.02,-.05];export{a as rvalData};
