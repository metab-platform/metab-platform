const a=[.7,.07,.06,.12,-.04,.65,.02,.28,.02,-.07,-.05,.3,-.42,-.1,0,.21,.23,-.04,-.46,.35,.01,-.06,-.01,0,0,.03,-.07,.1,.14,-.12,.11,-.03,.05,.76,.18,.28,.12,-.02,-.18,.04,.07,.03,.23,.21,-.27,-.04,-.08,.38,-.09,-.04,-.14,.75,.11,.07,.21,0,-.07,.82,-.11,-.01,.32,.02,.09,.03,-.07,-.09,.09,-.09,0,.06,.02,.06,.14,-.18,.05,.31,.16,.32,0,.16,.11,.02,.05,.05,0,-.21,0,-.21,-.08,-.07,.15,-.19,.1,.08,.2,-.38,.04,.52,0,.35,-.01,.13,.15,.05,.05,-.29,.06,-.17,.1,0,.32,-.06,-.12,.21,0,.02,.07,-.02,.07,.01,-.21,-.19,.36,-.04,.14,0,-.02,.2,.07,-.03,.12,.01,.01,-.04,.32,.32,.13,-.22,-.05,.79,.05,.87,.04,.05,.95,.15,.13,.22,.11,-.01,.14,.12,.14,.32,.18,.15,-.17,.67,.11,0,.05,.11,-.23,-.04,.12,.22,.06,.01,.22,.03,.87,-.01,.13,-.11,-.03,-.02,.06,-.15,.29,.06,-.02,.23,-.11,-.12,-.02,-.41,.4,.63,.1,.27,.15,.29,-.34,.23,.12,.08,.06,.33,.45,0,0,.04,-.02,.27,-.04,.12,-.1,.1,.18,-.47,.11,0,.25,-.03,.82,.19,-.08,.09,.01,-.17,.09,-.01,.01,.12,-.12,-.01,.18,0,.31,.07,-.02,-.02,-.09,.02,-.7,.89,-.07,-.05,-.06,-.02,.08,-.05,0,.13,.14,.02,.02,.08,.18,.15,.2,-.25,.1,-.11,.06,-.25,-.33,.17,.03,-.02,.04,-.09,.13,.03,.17,.06,0,.03,-.07,.42,.23,.31,.02,.01,-.09,-.18,-.12,.34,.01,-.07,.1,-.25,.06,-.23,-.02,-.02,-.3,.08,.32,-.08,.02,-.16,0,-.01,.11,.21,-.02,.41,.15,-.01,.16,-.04,-.06,-.15,.33,-.17,-.15,.12,.09,-.08,.02,-.14,-.41,.93,.07,0,.06,-.04,.06,-.17,0,.13,-.01,.01,-.02,-.01,.1,-.08,-.01,-.03,-.04,.06,.04,-.32,-.11,.17,-.02,.11,-.05,-.04,.16,.06,-.13,.05,0,.02,-.13,.19,.04,-.05,.11,.37,.64,-.02,-.04,.03,.03,-.01,.06,0,.25,-.16,-.06,-.3,-.01,.16,.68,-.02,.23,-.08,0,-.06,.02,.33,.35,.25,-.28,.02,-.07,.24,.18,.03,.02,.05,.06,.08,.06,-.05,0,-.01,.07,-.71,.13,-.16,-.23,-.03,-.08,-.11,-.04,-.02,-.09,.02,.04,.15,.06,-.2,-.04,.03,.07,.03,-.08,-.14,-.15,.04,.21,.34,.01,.05,.13,-.46,.71,-.23,.15,-.48,.1,.01,-.05,-.28,-.04,-.03,-.13,.29,.08,.44,.15,0,-.06,.02,.02,.37,.09,.04,.03,.54,-.06,.13,-.01,-.08,.34,.24,-.05,.11,.06,-.09,-.07,.02,-.21,.06,.56,-.15,.08,.08,.25,.37,.05,.03,-.11,-.3,.14,.07,-.12,.04,.57,.56,.03,.06,.11,.1,.1,-.21,.14,-.01,.1,.12,-.02,-.03,.1,.02,.05,.04,-.03,.29,-.08,-.08,.19,.02,-.06,-.2,.01,.09,.05,.11,-.01,.1,.08,.07,.28,.12,-.05,.21,.1,.07,.02,-.12,-.04,0,.5,.09,.34,.07,.02,.02,-.15,-.15,.17,.87,.06,.42,.09,.16,.12,-.07,-.07,.09,.82,.83,.02,-.12,.15,.17,-.09,-.11,-.74,-.16,.09,-.05,.57,-.19,.05,.07,-.3,0,.04,.11,.06,-.53,-.1,-.07,-.04,-.02,-.02,-.01,-.11,.14,-.03,-.19,.03,-.24,.35,-.33,.02,.05,.11,-.02,0,.01,-.15,-.2,-.09,.04,.15,.52,.08,.1,.1,-.04,-.01,.16,.08,.07,-.19,-.05,-.14,.08,0,.36,-.02,-.07,.64,-.01,0,.08,.02,.43,.02,-.18,.01,.03,.23,.1,-.03,.16,-.35,.33,-.43,.09,-.05,.08,-.1,.65,.08,.08,.14,.01,-.11,.46,-.06,-.04,.11,0,-.3,-.17,-.26,.19,-.05,.14,.09,.07,.22,-.27,.27,.08,.02,.23,.1,.03,.07,.06,-.44,.07,.46,.22,.01,.03,.06,.17,-.04,-.04,-.24,-.09,0,.08,.03,.19,-.08,.47,-.14,-.05,.12,.11,.05,.23,-.02,-.15,.22,-.03,.05,-.01,.09,.29,.06,.14,.04,.24,.45,.52,.2,0,.08,.2,.28,-.05,.06,-.72,.81,-.03,.55,.35,.05,.21,.01,.1,.24,-.18,.1,-.26,.21,.25,.56,-.1,.05,-.05,.14,.1,-.09,.05,-.01,-.01,-.13,.07,.19,.08,.15,-.31,.06,-.27,-.16,-.06,.61,.05,.29,.1,-.01,-.12,.1,.04,.01,-.13,.05,-.25,-.02,.07,0,-.19,-.12,.41,.05,0,-.06,.23,.74,-.16,.05,.47,.04,-.15,-.19,.08,.32,-.07,.1,-.14,.08,.1,-.11,.04,.05,-.6,-.14,.77,.07,.14,.04,.86,.04,.4,-.05,.17,-.03,.03,.01,-.19,.33,.07,.05,.1,.01,.34,.01,-.19,-.12,-.06,.1,-.04,-.01,-.02,-.02,.06,.02,.06,-.18,.33,-.29,.15,.25,-.07,.08,.02,.11,-.16,.06,.07,-.02,.01,-.06,-.04,-.24,-.15,.03,.03,.53,.48,.03,-.35,-.27,-.01,.1,.25,-.02,.27,-.05,-.04,.34,0,-.09,.01,.13,-.27,.65,-.12,.21,.1,-.6,-.02,.1,.08,-.1,.03,.09,.2,-.03,.03,.24,-.19,.06,-.18,.22,-.12,.21,.09,.21,.05,-.2,-.07,.17,-.01,0,.74,-.04,.02,.01,.19,-.12,.04,.2,.09,.11,.05,.01,.9,-.14,.19,-.18,.01,-.19,.12,.28,-.08,.08,0,-.05,-.43,-.32,.24,.09,-.4,.19,-.36,.04,-.07,.12,.02,0,-.05,.92,.02,.69,.01,.62,.1,.85,-.17,.1,-.09,.08,.03,.41,.1,0,-.14,.26,-.21,-.07,.09,.03,.02,.77,.03,0,.03,.27,-.01,-.15,.04,-.08,-.08,.2,-.08,.45,.02,.51,-.09,-.02,-.17,.05,.03,.1,.11,-.06,-.06,-.02,.04,-.16,-.16,.12,-.01,.04,.01,0,.1,.09,-.07,.04,0,.05,.02,.02,.1,-.22,.01,-.4,.29,0,.01,.04,-.05,-.05,.03,.09,.09,.04,.12,-.16,.13,.08,-.2,0,.66,.77,.36,-.11,-.02,.1,-.02,-.14,.09,-.02,.18,-.01,-.2,.08,-.19,.01,.3,.31,.11,.62,.24,-.21,.48,-.05,.35,.1,-.23,.3,-.14,.1,.35,.15,.15,.02,-.2,.17,.05,.09,-.22,.1,-.13,.77,-.2,-.1,-.25,.14,-.05,-.17,.22,-.07,-.02,.06,.06,-.06,.01,-.42,-.13,.25,.03,.23,.02,-.1,.14,.16,.15,.09,-.06,-.38,.22,.02,.23,.21,.01,-.26,.65,-.18,-.05,.13,.2,.05,.05,0,.07,.16,.53,.57,.02,0,.01,0,.01,.39,.06,.89,-.07,.14,-.03,.43,-.12,.07,-.28,-.15,.06,-.05,-.02,.04,-.12,.08,.11,.02,-.15,.08,.03,.25,-.12,.36,.13,0,.26,-.08,-.16,.1,.16,-.7,.15,.12,-.23,-.03,-.39,-.15,-.02,.22,-.04,.15,-.05,.49,.46,-.15,.4,.04,-.1,.15,.06,-.02,.12,.02,-.26,.37,-.02,.06,.07,.92,.13,.02,.34,-.25,-.01,.09,.96,-.05,-.14,.1,-.15,.42,.22,.62,.04,-.26,0,.95,.06,.59,.88,.05,-.06,.69,.07,-.11,.03,.06,.12,.09,.11,-.14,.55,-.19,-.06,.1,-.18,-.07,.19,-.02,-.03,0,-.12,.3,-.02,-.05,.73,-.03,-.06,-.09,.06,.08,0,.07,-.2,.04,.56,-.04,.11,.06,.04,.13,.38,.48,.09,-.01,.1,.14,.14,.01,.15,.09,.52,-.39,.03,-.03,.04,.53,0,0,.18,.25,.05,.12,.96,1,.3,-.24,-.26,.22,.15,-.18,-.12,.05,-.01,0,.15,-.12,.23,.38,.95,-.03,.02,.08,.22,.96,.14,.55,.01,.02,.74,.06,.08,.59,.27,.42,.37,.13,-.29,.14,.12,.3,.03,.35,.01,-.41,.37,-.17,-.14,.2,.74,.01,0,.14,.08,.1,.01,.06,.44,.1,-.04,.11,.61,.11,.22,.12,.85,-.03,-.03,.26,.61,-.19,.2,.05,.36,-.01,0,-.14,.1,-.08,.07,.01,.25,.36,-.11,.11,-.13,.45,.07,0,.04,.01,-.03,-.11,.06,-.29,-.02,.18,-.01,-.02,.85,.13,-.07,-.44,-.04,.07,-.44,.06,.03,.12,-.21,-.12,.08,-.01,-.05,.08,.01,.16,.22,-.1,.2,.04,-.57,.22,-.12,.05,-.12,-.23,.18,.48,.01,.27,.08,.15,-.05,-.6,.12,-.04,.12,.12,.06,.2,.15,-.75,-.03,-.05,.01,.19,-.04,.17,.12,-.12,.12,-.08,.02,-.4,-.11,.01,-.06,.19,-.1,-.06,-.05,-.04,.05,-.01,.01,-.71,-.1,.22,.11,.34,.1,.25,.1,.04,.11,.12,.7,-.01,-.04,.02,-.09,.01,.06,.02,-.1,.4,0,-.21,.29,.02,.01,.67,-.03,.16,-.02,-.04,-.02,.23,.11,.03,.37,.25,.18,.03,.15,-.03,.03,-.16,-.07,.31,.1,.05,.05,.01,.07,.21,.68,.21,-.36,.08,.02,-.07,.01,.79,.07,.11,-.07,.06,.12,.44,-.11,.11,.01,.02,-.01,.02,.26,.05,-.24,.09,-.11,.31,.35,.25,.11,.1,.18,-.06,.15,.17,.17,-.06,-.04,.11,.14,.11,.1,.12,-.23,-.01,.05,-.25,-.09,-.02,-.05,.06,.05,-.13,.27,0,.1,.12,-.12,.1,-.06,.16,-.27,-.01,.16,-.01,.15,-.05,.2,-.09,.06,.08,-.05,-.26,.31,.04,-.03,.06,0,-.23,-.29,-.01,-.03,-.04,-.13,.02,.1,-.08,.29,-.08,-.09,-.08,.8,.16,.05,.17,.15,-.01,-.12,.15,.08,.07,.04,.17,.01,-.01,.1,.02,.06,.05,-.04,-.22,.46,.08,.02,-.09,-.08,.03,.01,.88,.06,-.04,.05,-.02,-.13,-.15,.17,-.09,.12,.13,.2,-.17,-.04,-.04,-.2,.04,-.01,-.02,.01,.95,.07,-.01,-.07,.08,-.07,-.03,-.04,.05,.06,-.01,.12,.05,-.06,-.01,-.06,.05,.02,-.07,-.01,.1,-.01,.04,0,.15,.05,-.16,0,.11,.04,.05,.11,.09,.05,.07,.13,-.03,.01,-.23,.02,.04,.24,.19,.02,-.02,.02,.45,.06,-.17,.32,.12,-.09,-.25,.18,-.05,-.05,.03,-.08,.17,.3,-.01,-.23,-.08,.05,.09,-.01,.1,.02,.1,.52,.01,-.01,.07,-.08,-.02,.08,-.06,.04,.3,-.02,.12,-.23,.04,.27,.1,-.04,-.16,.02,0,.02,.03,.06,.04,.03,.08,-.01,.05,.16,.04,-.05,-.02,-.34,.12,-.45,.12,.14,-.08,.03,-.06,.18,.07,.1,.12,.08,.11,0,-.24,.04,.12,.04,-.01,.05,.01,0,.15,0,.01,-.02,.09,.05,.01,-.13,.16,.2,.04,-.11,-.05,-.05,-.05,-.12,-.14,.03,.12,-.05,-.12,.01,0,.02,.06,-.05,.06,.18,.08,.43,-.42,-.04,.03,.23,.18,.1,.05,.11,-.03,-.03,-.07,-.03,.89,-.17,-.02,-.37,.06,.1,.04,.12,.09,.03,.14,.05,.08,.07,-.16,-.11,.02,0,-.09,-.16,.11,-.08,-.11,.12,-.15,.1,.02,.24,.06,.04,-.26,0,0,.24,.02,0,-.19,-.04,-.05,.04,-.01,.02,.09,-.13,.1,.06,.01,.01,-.03,.45,.07,.03,.01,.21,.01,-.01,-.16,.01,.01,.14,.15,-.07,-.11,-.03,.04,.14,.2,.35,.14,.08,.08,.05,-.02,0,.12,-.12,.03,-.06,-.1,.12,.03,-.06,.51,.09,.05,.14,.21,-.16,.13,.13,-.03,-.23,.1,.08,.08,.94,.89,.05,.09,.05,.18,.02,-.39,.07,.11,-.03,-.17,.07,.02,.21,-.04,-.06,0,.03,-.13,.17,.05,.07,0,.38,.01,.11,-.56,.06,.05,.3,-.01,-.04,.04,.06,.05,-.1,.05,-.11,.21,.11,.02,-.12,.07,.12,.54,-.14,-.55,.23,.15,.09,.13,.12,.01,-.19,.07,.1,-.08,.85,.01,.24,.07,-.05,-.38,.26,.03,-.14,.19,.36,.12,.02,.02,-.02,.01,.24,.11,-.25,-.2,.09,-.16,-.02,.31,0,-.42,-.11,.11,.17,-.34,.1,.12,.56,-.03,.12,.45,-.06,.14,.04,.23,.03,-.2,-.07,.88,.35,.07,.14,.1,.04,.05,.12,.11,-.05,.07,.03,.03,-.63,.12,.02,-.04,-.17,.2,.4,.14,.55,.04,.14,-.08,.07,.02,.2,.13,.11,.04,.65,-.19,-.12,.53,.14,-.19,.08,.05,-.09,.11,.1,.19,-.13,-.05,.04,-.03,-.16,-.06,.05,.01,.3,-.19,.09,.07,-.02,.44,.11,.01,.05,.23,-.27,.1,.29,0,.09,.04,.44,.12,.23,.06,-.09,.08,-.04,.03,.08,.07,.06,.02,.12,.21,.04,.18,.04,.04,.01,.01,.05,-.04,-.04,-.08,.11,-.06,-.07,-.07,-.03,.93,-.02,.01,-.18,.12,.17,-.05,.13,-.04,.1,0,.14,.11,.12,.13,.26,.06,-.04,-.17,.29,.13,-.44,.55,-.13,-.08,-.03,.03,.87,-.23,.14];export{a as rvalData};
