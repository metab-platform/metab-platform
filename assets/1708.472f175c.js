const a=[.06,-.02,-.18,.04,.03,.3,.13,.3,.01,-.06,-.22,0,.05,.02,-.3,.08,-.07,.22,.06,.07,-.12,-.07,-.01,-.34,-.13,.12,-.21,.37,.46,-.27,.07,-.14,.03,.15,-.18,.07,-.2,-.39,.13,-.1,-.06,.11,.26,.03,-.18,-.34,-.12,.18,.12,.05,-.18,.24,-.11,-.15,.29,-.34,-.06,.3,.22,0,.18,.03,.02,.11,.29,-.09,.09,-.41,.06,.05,-.05,-.09,.28,.05,0,-.12,.01,.19,-.42,.15,0,.17,-.08,.2,.03,-.11,.16,.04,-.02,-.34,.44,.1,.21,.21,-.18,.3,-.05,-.14,.29,.34,.09,-.05,.13,.1,.18,.02,0,-.13,.11,.02,-.11,.1,-.02,.2,.07,-.06,-.09,.01,.25,-.04,-.07,-.08,.03,.21,.31,.1,-.06,.32,-.1,-.13,.33,.17,-.02,-.02,-.1,.38,.41,.16,-.15,.13,.21,.17,.35,.17,.19,-.06,-.16,.61,.11,-.14,-.05,-.07,.09,-.01,.36,.48,.37,.06,-.13,-.37,.34,.15,-.06,.03,.18,.18,0,-.07,.31,.02,.19,.09,.35,.25,.29,-.06,.01,-.17,.25,-.05,-.19,.08,0,-.27,.24,.11,-.16,.14,.24,.09,.02,.18,-.07,.22,.11,-.19,.19,-.16,.07,-.04,-.44,.06,-.11,-.03,.06,.29,.22,.31,.29,.05,.24,-.26,-.09,-.21,.28,.25,-.18,.3,-.14,-.19,.27,.18,.02,-.1,.21,-.12,.27,-.09,.14,.32,-.1,.13,-.03,-.27,-.12,.19,-.14,-.45,.09,-.03,.16,-.3,.41,.52,.25,.03,-.15,-.01,.05,-.03,.08,.23,.3,.27,.19,-.02,.07,-.2,-.06,-.26,-.11,.45,-.17,.17,.54,.17,.01,.22,-.19,0,-.05,-.21,-.12,-.32,-.17,.06,-.17,.19,-.18,.12,.37,-.29,-.47,.15,.37,.05,-.31,-.15,.05,0,.16,.29,.17,-.01,.25,.29,-.25,-.1,.01,.07,-.11,-.04,-.17,-.22,-.04,.19,.11,.07,.55,-.39,.22,.05,-.07,.22,.16,.07,-.05,.42,-.26,-.2,.27,.07,-.26,.09,.15,.41,.22,.21,.07,.4,.14,.26,.22,.1,.08,.01,0,.25,.01,-.14,.21,.22,.09,.08,-.23,-.17,-.09,.46,.22,.38,.14,.33,.13,.38,-.13,-.43,.07,-.02,-.19,-.25,-.1,-.06,.45,-.1,.03,0,.34,-.14,.41,.07,.12,-.03,-.08,.38,.19,.21,.23,.23,-.07,.46,.06,.03,.03,.03,-.06,.18,-.13,0,-.08,.01,-.24,-.06,0,-.1,-.13,-.05,-.09,-.21,.23,.23,.05,.49,-.23,.04,.21,-.07,-.15,-.13,.12,.2,-.31,.03,.3,-.25,.29,-.01,.2,.09,.37,.12,.06,-.16,.1,-.15,.06,-.09,-.08,-.11,.35,.34,.35,.33,-.03,.06,.28,-.24,-.12,.19,.05,.08,.24,.2,.28,0,-.21,.32,-.07,.22,-.01,-.03,-.04,.22,0,.42,-.05,.41,-.03,-.12,.46,-.11,-.15,.14,.11,.28,.03,.02,.05,-.07,-.1,-.23,-.15,-.16,-.01,-.06,.51,.05,-.1,-.25,-.19,-.25,.18,-.28,.06,.18,-.25,.51,.17,.27,.3,-.29,-.21,.01,-.03,.21,.02,0,-.02,-.09,-.19,.43,.43,.19,-.14,.03,.04,.31,.74,-.05,.05,.26,.12,.34,.21,.27,-.18,.06,.14,.24,.27,.19,.03,-.02,.12,-.12,.34,.13,.04,.01,-.2,.2,.24,0,.08,.21,.23,.17,.32,.2,.61,-.01,-.21,.39,-.09,-.13,.18,.17,.39,-.13,-.26,.52,-.31,-.13,-.13,-.38,.08,-.05,-.06,.5,-.05,.01,-.31,-.05,.38,.13,-.05,-.07,-.04,-.09,.2,-.04,-.16,-.22,-.35,.12,.08,-.12,.07,.02,.22,.21,.13,.02,.22,.51,.03,-.19,-.07,.13,.1,-.22,-.15,-.11,-.19,-.08,.19,.09,-.1,-.19,.36,.01,-.15,-.07,-.04,.07,.03,-.24,.42,.31,-.11,.43,.08,-.19,.09,.17,.04,-.09,-.02,.03,-.17,.14,.16,.27,.28,.01,.49,-.06,.14,.41,.22,.03,-.2,-.24,.01,.16,-.04,-.05,.05,.3,.12,-.11,.29,.14,-.03,.3,-.15,.2,.65,.15,-.07,.03,0,.03,.46,-.01,.05,-.12,-.53,-.07,.05,-.09,-.02,.27,-.02,.4,.02,0,-.05,.5,.21,.12,0,.09,.02,-.28,.1,.41,.04,-.05,.18,.14,.03,.6,.09,.07,.48,.22,.09,.12,.12,.13,-.01,.19,.63,-.12,.15,-.01,-.01,0,-.15,-.01,.23,.23,.26,-.06,.08,-.06,.13,.12,.06,-.16,0,.31,-.09,.02,-.03,-.02,.14,.16,-.16,.08,.2,.16,-.23,-.04,.05,.16,-.05,-.15,-.01,-.05,.04,.03,.01,-.14,.24,.4,-.19,-.05,.31,.01,-.18,-.09,-.07,-.14,-.07,-.02,.05,-.28,.17,.23,.05,.13,.05,.57,-.23,-.1,.07,0,.23,-.19,.03,-.12,.08,-.15,.04,-.33,.07,.04,-.13,.37,.61,.6,.03,.2,.49,-.02,-.1,.15,.05,.4,-.18,.02,-.21,.2,-.28,.17,.32,.16,.22,-.27,.14,.5,.09,-.47,.15,-.13,-.13,.27,.29,.26,.05,.03,.02,.02,-.24,.21,.02,.15,.38,.03,.17,.18,0,.21,.13,.42,0,.12,.12,.08,-.01,.15,.15,-.12,-.1,-.11,-.04,.17,.1,-.04,.38,-.11,.34,.03,.23,-.18,-.17,.06,.07,-.05,.31,.03,.06,.45,-.22,-.16,-.16,-.02,.24,-.1,.17,-.02,.11,-.05,.09,.35,.44,.34,.18,.18,.2,-.09,.03,.04,.61,.47,-.06,.19,.61,.3,.34,0,.1,.49,.62,.43,.43,.2,-.01,.21,-.21,-.17,.08,.03,-.25,.04,.43,.19,.18,.17,.07,.08,.04,.24,.16,-.01,.01,.02,-.09,-.07,.08,-.06,.18,.05,.16,-.01,.12,.42,-.01,.33,.15,-.11,-.12,.16,-.02,.41,.04,.39,.44,-.06,.58,.05,.1,-.15,.15,-.03,.08,-.11,.02,.42,.17,-.19,-.08,.07,.16,.08,.13,.09,.08,.09,-.12,.24,.26,.15,.44,.34,.14,-.16,-.06,-.06,.32,-.08,.48,.11,.42,-.01,.12,.55,.14,.15,.11,-.19,.22,.03,.17,.04,.13,-.03,.08,.03,-.1,.48,-.41,.02,.26,-.38,.1,.4,.2,.02,-.01,.33,.03,.28,.06,.29,.37,.09,.08,.12,.16,.17,.37,.08,-.22,.52,-.02,.03,.07,-.17,.2,.12,-.03,-.03,.11,-.24,.07,.12,.09,.09,-.14,.23,.33,-.16,.34,0,.07,.19,.62,.01,.18,.27,.09,.31,.04,.45,-.03,.08,.08,-.01,.39,-.23,.13,.37,.15,.17,-.1,.18,.05,-.04,.23,-.1,-.21,.18,-.09,.52,.16,0,-.01,.03,.16,-.03,.06,.03,.14,-.26,-.11,.3,.57,.11,-.28,.15,-.13,-.01,.07,.46,-.04,-.12,-.21,.07,.43,.18,.37,-.25,.09,.22,-.37,.35,.3,-.08,.14,.05,0,.12,.2,-.08,.05,.09,-.06,.23,.14,.35,0,.02,-.38,.21,.15,.49,.14,.2,.17,-.01,.33,-.1,-.03,.06,.02,.03,.14,.08,-.09,.28,.13,.01,.05,-.05,.1,-.09,.31,.08,.03,-.37,-.17,-.15,-.01,.15,-.11,-.39,.4,-.06,.44,.15,-.07,0,.07,.03,.12,.56,.23,.39,.13,-.11,-.05,.04,.22,.22,.04,-.32,-.11,-.14,.01,.25,.26,.14,-.11,.51,.22,.36,.12,.15,-.04,-.12,.25,.19,.06,.21,.03,-.03,-.09,.2,-.01,.03,.03,.39,.08,-.06,-.23,.05,.03,-.06,.41,0,-.02,.17,.06,.04,-.05,-.21,.25,-.35,.44,.03,.21,.03,.03,.02,.12,-.03,.11,.23,.16,.16,-.07,-.09,.45,.19,.53,-.22,-.21,.25,-.12,.02,-.21,.15,-.18,.46,.04,.23,-.09,.5,.36,.17,-.17,.23,.2,.43,0,-.26,.58,.4,-.11,.13,-.09,.16,-.03,-.1,-.03,.11,.05,.21,-.19,.13,-.21,.22,.21,-.11,-.1,.13,.28,.27,.1,-.01,.32,.42,-.04,-.02,.25,.01,.36,.07,.01,.05,-.01,.23,-.14,.12,-.23,-.12,.23,.07,-.21,.04,.05,-.15,.01,.09,.28,.08,.23,.13,.33,.26,-.2,.27,.05,.14,-.04,-.11,-.08,.08,-.14,.19,.05,.24,.38,.25,.09,.01,.07,-.02,.11,.19,-.05,.08,.11,-.38,.17,.59,-.12,-.31,0,-.03,.11,.22,.34,.34,.15,-.14,-.14,.18,.21,.46,.04,.11,.33,.29,-.3,.06,-.18,-.15,-.04,.01,.26,.26,.44,.18,.32,.04,-.04,.08,.07,-.06,-.05,.02,-.26,-.04,-.28,.29,.11,.16,.1,.15,-.07,-.03,.13,.16,.12,.35,.41,.2,-.05,.12,-.03,.2,.24,.24,.11,.36,-.01,-.2,.03,0,-.04,-.3,.24,-.04,.21,.21,.27,.07,-.09,.13,.24,.2,.09,-.35,-.29,-.08,.26,.02,.34,-.04,.63,.31,-.13,-.2,.43,.05,-.03,.11,.38,.14,-.35,-.21,.03,-.41,.34,.2,-.11,.26,0,-.06,.14,.45,.28,-.27,.06,-.01,.25,.13,.15,.1,.16,.27,-.09,.04,-.09,-.05,-.21,-.08,.04,.27,-.07,.41,0,.17,.16,.04,.27,.03,.36,-.41,.27,.12,.05,.25,-.09,.25,.12,-.15,.05,.25,-.06,-.04,-.07,.05,.14,.3,.03,-.06,-.1,.26,.08,-.07,.21,.02,.19,.29,-.5,-.16,.44,0,.08,-.05,-.05,-.12,.18,-.07,.22,.01,.42,-.31,.01,.22,.26,-.05,.32,-.11,-.09,.35,.34,-.11,.24,-.05,.29,.47,-.06,-.03,.03,-.23,.18,.19,-.07,.55,.31,.01,-.11,.26,.3,.06,-.19,-.07,.07,.07,.11,.03,.03,.15,.05,-.23,.43,.43,.24,-.17,-.3,.11,.1,.16,.11,-.05,.7,.05,.03,.17,-.07,-.11,.37,.05,.3,-.01,.03,.33,-.27,.02,0,.24,.31,.14,.19,-.26,.27,.31,.16,-.26,.15,.44,.22,-.22,.09,.19,-.21,-.05,-.23,.01,.39,.21,0,-.19,-.37,.09,-.01,-.27,.07,.23,.2,-.06,.08,-.03,.04,-.41,.18,-.12,-.13,.13,-.14,.25,.07,0,-.17,-.16,0,.24,-.05,.08,-.13,.43,.03,.06,-.15,-.14,.18,.25,.44,.08,-.24,-.2,-.17,.54,-.36,.18,.2,-.2,.04,-.17,.14,.1,.4,.23,.06,.1,0,.01,-.14,.2,-.23,-.02,.13,-.05,-.13,.33,-.24,.02,-.01,-.08,.05,.12,0,-.15,.08,.22,.09,.2,.67,-.03,.12,.01,-.13,-.06,.15,.31,-.22,.13,.74,-.29,.67,-.06,-.12,.18,.25,.19,-.16,0,.02,-.03,.03,-.12,-.29,.11,-.02,0,.23,.31,-.07,.26,.17,-.16,-.06,-.22,-.22,.05,-.05,.09,.04,.12,-.04,-.12,.04,-.22,.22,.11,0,-.07,.33,.02,-.11,.07,-.12,-.42,.36,.14,-.36,-.36,.01,.21,.08,0,.09,1,.27,-.01,.05,-.23,-.18,-.24,-.15,-.06,-.19,-.26,.03,-.18,-.18,-.01,.13,-.1,.14,-.19,0,.13,-.26,-.14,.07,.26,.24,-.27,.15,-.16,.24,.11,-.01,.16,.18,.22,.17,-.02,-.19,-.06,-.22,.1,-.03,-.05,-.17,-.02,-.22,.02,-.26,.02,-.17,.25,.11,.04,.34,.02,-.07,.24,0,.01,-.12,.08,.09,-.01,.04,-.03,-.11,.33,-.3,.07,-.21,0,-.12,.06,-.05,.05,.09,-.4,-.04,.28,.1,.14,.42,.33,0,0,-.02,.11,.09,.32,-.21,-.04,.1,-.07,.46,-.13,-.15,.5,.01,.16,.25,.12,.12,-.12,.13,-.23,-.2,-.12,.02,-.11,.09,-.07,0,-.18,.5,.08,.45,.12,-.22,.16,.37,.43,.21,.28,-.2,-.17,-.02,.06,.23,.21,.14,-.31,.29,-.07,.08,.21,.02,.17,.02,.28,-.03,.13,.03,.23,-.13,-.2,.52,-.06,.43,.4,.19,.13,.29,-.17,-.19,.09,-.06,.25,.05,.31,-.25,0,-.12,.63,.18,.02,-.11,.08,.37,.38,-.01,-.12,.23,.08,-.06,.14,.02,.07,.05,.03,.23,-.01,.1,-.01,.28,.32,.39,.13,-.11,.03,.17,-.08,-.02,-.13,.11,.15,.42,.22,.01,-.06,-.07,.37,.06,.07,.07,-.04,0,-.08,.02,.1,.03,-.07,-.21,-.34,.17,.49,-.04,.11,.4,-.03,.04,-.05,-.11,-.27,.46,.02,.17,0,-.36,.22,.16,.02,.43,.2,-.19,.05,-.25,.04,-.34,-.27,.05,.28,.2,.04,-.1,.09,.1,.48,-.15,-.06,.08,0,-.15,.22,.25,-.04,-.12,-.29,-.1,-.07,.27,.08,.26,-.03,.11,-.03,-.04,.11,-.05,-.05,-.09,.06,-.13,.17,-.42,-.09,-.29,.11,-.25,.02,-.09,.35,-.37,-.02,.33,-.15,.18,-.14,.34,.06,.31,.12,.1,-.06,.1,.2,.01,.04,.04,.09,.06,-.09,.31,.18,-.25,.16,-.31,-.11,.07,-.35,.15,-.13,-.22,.43,-.08,-.08,.05,.01,-.04,-.06,.18,.21,-.34,.33,.01,-.02,.2,-.09,.1,-.04,.2,.2,-.1,-.06,-.16,-.09,-.04,.27,-.07,.25,.19,.09,.22,.63,-.09,-.01,-.23,.15,-.04,.04,-.24,.34,.13,.26,-.07,0];export{a as rvalData};
