const a=[.11,.06,.14,.13,.04,.38,.08,-.13,.12,-.35,.43,.21,-.29,-.14,.36,-.09,.2,-.02,-.22,.08,.01,.34,-.17,.33,.37,.09,.31,.04,-.21,.33,.16,.4,.23,.07,1,.08,.27,.35,-.12,.03,-.05,.04,.05,-.05,-.15,.36,.17,.56,.35,-.34,-.12,.19,-.12,.13,-.05,.18,.37,.03,-.38,.31,.04,.13,-.07,-.02,.12,.22,.13,.32,-.04,-.09,-.1,.05,-.12,-.06,0,.08,.22,0,.2,.34,-.02,.33,.12,.04,.13,.36,.07,.09,-.13,.23,-.36,-.19,-.12,-.32,.29,-.07,-.12,.35,.12,-.05,.03,.08,.09,.08,-.05,.01,-.13,-.15,.26,.04,.08,-.19,-.07,-.19,.35,.22,.33,.33,.46,.3,-.17,0,.15,0,-.38,-.1,.08,.34,.22,.24,-.22,-.18,.01,-.37,.33,.21,-.33,-.19,.29,.05,.01,.07,-.2,.06,.16,-.03,-.06,.01,.11,.08,.13,-.18,.06,.2,-.33,-.13,-.36,.24,.03,.37,-.34,.05,-.12,-.05,-.1,-.07,.4,.3,.09,.24,.29,.31,-.33,-.46,-.06,.47,.12,.28,-.16,.28,.13,.23,-.03,.1,-.12,-.23,.34,.14,-.29,.06,-.08,-.02,.04,.03,.06,.37,.14,.1,.19,.38,-.08,.19,.22,.14,.03,.13,-.54,-.23,.01,-.34,-.38,.41,.08,.3,.05,.06,-.02,-.32,.47,.05,-.07,-.04,.21,.2,-.05,.2,-.29,.41,.12,-.19,-.14,.06,.09,.13,-.25,.24,.29,.07,-.18,.03,-.24,.4,-.27,-.37,-.21,-.28,.12,-.1,.04,-.04,-.04,-.08,-.11,.29,.05,-.08,-.12,.25,-.1,.09,-.08,-.4,.15,.02,.03,-.02,.18,.02,.14,.01,.26,.24,.26,.02,.24,-.17,.3,-.11,.13,.34,-.32,.05,.12,-.32,-.18,.13,.22,.3,-.09,.4,.04,-.29,.15,-.23,-.03,.06,.09,.16,-.06,-.35,.1,.2,.31,-.2,.14,-.16,.32,-.04,-.12,.07,-.05,-.05,-.02,.16,.32,-.35,-.36,-.45,.04,-.2,-.06,.13,.34,.12,-.5,-.24,.14,-.45,.17,-.21,-.08,-.07,.12,-.09,.16,.08,.2,-.07,-.12,.53,-.22,.09,-.06,.02,.21,.18,-.16,-.25,-.04,-.34,.03,-.45,.3,-.2,-.37,.14,.04,.05,.15,.15,.08,-.13,-.25,-.18,.07,-.11,.04,.17,-.04,-.12,.34,-.15,-.08,.15,.06,-.13,-.3,-.01,-.03,-.27,.13,.17,.13,-.25,.24,.28,.06,.12,.28,.23,.13,-.28,.04,-.24,-.22,.15,.39,-.16,-.41,-.37,.07,-.04,.13,.01,-.22,.1,.27,.17,.09,.08,0,-.08,.1,.12,.13,.15,0,.28,-.32,-.01,.14,.19,.41,-.29,.15,.2,.25,.01,-.31,-.38,-.31,.18,.27,.24,-.54,.01,-.42,.11,.11,.24,.03,.01,-.21,-.03,-.48,.13,.21,.02,-.13,.14,.07,-.07,-.15,.02,.19,.1,.45,.19,.06,.13,-.01,.08,-.08,-.1,-.17,.45,-.19,-.04,.04,.16,-.16,.24,.29,.19,-.37,.31,.05,-.03,.38,.19,.02,.22,.24,-.08,-.43,-.08,-.06,-.18,.2,.07,.18,.26,-.19,-.41,.11,.24,-.39,-.11,.35,-.2,-.38,-.38,.16,.11,-.01,-.02,0,.44,.23,-.15,.13,-.02,-.19,-.02,-.39,.41,-.07,-.25,-.17,.08,.11,.17,.2,.06,.15,.29,-.04,.04,-.17,.07,-.2,-.4,-.22,-.52,.2,.11,-.13,.21,-.11,.15,-.07,-.43,-.25,.16,.52,.02,.05,.22,-.02,-.37,.14,.2,.08,.21,-.07,-.31,.11,-.5,-.07,-.12,.03,.35,-.32,-.14,-.22,-.23,-.11,.02,-.09,-.04,.05,.07,-.05,-.36,.19,.1,-.01,.2,-.31,.19,.53,.14,-.06,-.04,-.02,.38,.2,.04,.34,.26,-.19,.03,-.1,.12,-.26,-.09,.2,.02,.08,-.09,.4,.04,.11,-.03,-.03,.35,-.32,.47,.1,-.35,-.02,.32,-.15,-.01,-.32,-.07,.17,-.25,-.1,.2,-.21,-.07,.08,.05,-.14,.32,-.37,-.13,.04,-.36,-.22,-.1,-.06,-.18,.28,.01,.33,-.42,-.09,.33,-.05,.2,.43,.15,.01,.07,-.2,-.04,.09,-.04,.27,-.07,-.4,.17,.32,.14,.3,.02,-.14,.07,.18,.02,.23,-.31,.24,.24,-.05,-.06,.06,.02,-.09,.17,-.02,.25,.06,-.42,.09,.06,.05,.06,-.1,-.05,.21,.13,.04,.19,-.14,-.02,.21,.07,-.1,-.02,-.13,-.23,0,-.14,.21,.41,-.04,.06,-.01,-.2,-.12,.01,.14,-.01,.07,.34,.1,.31,.25,-.21,-.13,.15,-.06,-.05,-.18,.16,-.19,.14,-.13,.14,.31,-.19,.23,.21,.02,.5,.25,-.03,-.02,-.09,.25,.08,-.15,-.39,.27,-.03,.14,-.19,.63,.35,.5,.2,-.19,.02,-.05,.32,-.2,-.21,.25,.53,.21,-.16,.21,-.06,.34,.19,.26,.1,.19,.23,.28,-.06,.11,.01,.02,-.23,-.05,.28,-.23,-.12,.13,.18,-.36,.15,-.15,-.15,.21,-.43,.18,.26,.18,-.05,.15,.06,-.22,0,.44,.5,.37,-.12,.14,.28,.15,.22,.19,-.21,-.04,.06,-.3,-.04,-.14,.11,.32,-.02,.09,.43,-.36,-.03,.06,-.05,.21,.43,.02,-.33,-.32,.28,.09,.19,.17,.02,-.2,.1,-.16,.25,.13,.02,.11,-.04,.01,.22,-.04,-.02,-.12,.23,-.19,-.05,.15,.41,.18,.35,-.28,-.33,.49,.1,-.13,.48,-.26,.15,.12,.46,-.03,-.07,.11,.08,-.28,-.48,-.06,.62,.04,.09,.3,-.27,-.06,-.49,.01,.45,-.41,-.39,.04,.22,-.33,-.35,-.06,-.38,-.26,-.08,.08,.24,.21,.15,.15,.02,.19,-.13,-.05,-.03,.09,-.48,0,-.28,-.19,-.12,.05,-.11,-.02,-.33,.05,.1,.42,.06,.13,-.02,.21,.2,-.08,-.37,.33,-.45,.03,.22,.67,-.55,-.11,.32,.28,-.23,-.4,-.03,-.04,-.2,-.29,.05,.07,.03,.08,.13,.18,-.4,-.04,.07,.28,.05,-.05,-.22,-.15,0,.13,.13,.39,.25,-.15,0,-.06,.01,-.19,.44,.14,-.19,-.24,.18,-.05,.35,-.42,-.07,.12,0,-.03,.5,.25,.16,-.48,.18,.09,-.1,-.08,.26,-.09,-.17,-.09,.25,.44,-.15,.03,-.01,-.18,-.11,-.17,.33,.05,-.43,.34,-.31,.09,-.31,-.5,.29,.34,-.06,-.2,-.37,-.32,-.42,-.22,-.3,-.03,-.01,-.01,-.01,-.01,.01,.01,.04,.14,.34,.2,.17,-.01,.18,.1,.01,.07,.2,.2,-.29,.04,-.09,-.08,.11,-.05,-.02,-.02,-.13,-.16,-.25,.19,-.01,.19,-.1,-.42,-.01,.17,-.16,-.14,-.1,.26,-.03,.05,.03,-.15,.2,.1,-.2,.05,-.36,.23,-.15,-.06,-.05,-.27,.07,.03,-.04,.06,.23,-.06,-.14,-.08,.21,.19,.26,-.25,.29,-.43,.16,.34,.03,.05,-.16,-.14,-.14,.1,.26,.42,-.03,.17,-.16,.03,.11,.22,.46,-.04,.08,-.01,.2,-.13,-.33,.33,.06,-.42,-.21,.04,.43,.11,-.14,-.21,-.08,.19,.12,.04,.06,-.43,.02,.27,.08,-.03,.14,.18,.34,-.2,-.29,-.14,-.17,.38,.1,-.11,.34,-.03,.18,.36,.33,.36,.15,.11,.18,-.05,.44,-.35,-.01,-.28,.13,.07,-.32,.41,.06,.2,-.39,.18,.16,.06,.88,0,.33,.03,.17,.18,.28,.14,-.38,-.03,.33,-.12,.08,.07,-.35,.16,-.09,.13,.12,.31,.18,.17,-.34,.26,.35,.11,.04,.08,-.11,-.31,.36,-.25,-.2,-.09,-.04,.24,.09,.16,-.17,-.3,-.07,.36,-.7,-.15,.23,.08,.26,-.41,.18,-.34,.13,.09,.25,.24,.34,-.03,.1,.09,.24,.53,.29,.09,.13,-.19,0,.15,.13,.01,-.31,.2,.28,-.19,-.44,.29,0,.01,-.01,-.13,.08,.16,-.06,.49,.16,.18,-.31,-.16,.19,-.03,-.31,.07,-.51,.05,.01,.03,.16,.06,-.04,.05,.14,.28,.08,.19,-.07,.16,.03,.32,-.08,-.06,.18,.15,-.08,.04,-.35,.32,-.09,-.2,-.22,-.19,.1,.07,.21,-.12,-.18,-.08,-.05,.28,.28,-.23,.26,.15,-.22,.2,.47,-.21,-.37,-.05,.21,-.19,0,-.18,.38,.29,-.37,.13,.24,.18,.21,.01,.21,-.42,.13,.01,-.02,-.43,-.14,.33,.13,.02,-.12,.23,.16,-.24,-.03,.19,.26,-.03,-.38,.19,.03,-.07,.21,-.2,-.03,-.07,0,-.22,.41,.25,.05,-.16,.01,-.32,-.37,-.22,-.15,.18,0,.1,.12,-.22,.22,-.34,-.22,-.36,.32,-.22,.2,.18,.09,0,-.32,.04,.37,.29,-.01,.09,-.09,.18,-.08,.01,-.01,.19,.14,-.22,.02,-.21,-.22,.02,-.12,.36,.12,-.25,.11,-.5,-.02,.05,-.26,.47,.29,.31,.27,.13,.06,-.45,.19,.01,-.27,-.14,-.08,.19,.07,-.04,.11,-.12,.11,-.31,.02,-.06,.15,-.05,.29,-.29,-.21,.26,.93,-.25,-.03,.09,.01,-.39,-.05,.11,.09,.18,.28,.08,-.18,-.15,.03,.19,.05,.09,-.13,-.08,.26,-.06,.28,.21,.03,.27,.15,.55,-.07,-.05,.05,.05,-.23,.2,.29,.22,-.15,.07,-.43,.07,.06,.11,.25,-.07,-.03,-.45,.29,-.37,0,.22,-.12,-.06,.14,-.15,.41,.11,-.38,.08,.29,0,.16,.22,-.21,.42,-.11,.11,-.17,.37,.44,-.05,.15,.07,-.01,.21,.32,-.18,.07,-.2,.37,.1,.32,.05,.29,-.09,-.19,-.14,.26,-.16,-.09,-.24,.21,-.26,.14,.01,0,-.25,.22,-.01,-.38,-.01,-.45,-.02,-.09,-.01,.36,-.2,.04,-.05,-.17,-.37,.1,.07,-.22,-.47,.35,.17,-.16,.16,-.13,-.05,.03,.02,-.25,.03,.44,-.45,-.44,-.16,.01,.05,.22,.05,.14,.05,.52,-.09,.26,-.18,.01,.12,-.06,-.46,.28,-.24,.21,.19,-.23,.01,.07,.21,-.02,-.28,-.36,0,.04,-.18,0,.01,-.07,.24,-.45,-.01,.06,.15,-.22,.14,.05,.01,-.12,-.08,-.35,.01,-.4,.4,.1,.06,-.05,.23,.04,.19,.1,-.31,.32,-.05,.34,-.34,.11,.11,.09,.01,-.25,-.03,-.22,.14,.24,-.07,.54,.2,-.23,-.12,-.46,.29,-.43,-.01,.35,.16,.05,-.01,.29,.19,.11,-.01,.11,.22,-.08,-.22,.1,-.23,-.37,-.06,.22,-.18,-.12,-.01,.09,.19,.15,-.24,.01,-.19,-.32,-.16,.15,-.11,-.21,.18,.24,.22,-.03,-.18,-.13,-.43,.12,.2,-.05,.19,-.03,-.17,-.1,-.1,-.25,.19,-.06,.03,-.04,-.16,.02,.02,-.15,-.16,-.15,-.18,-.05,-.16,-.34,-.15,.17,.17,.18,.15,-.29,.11,-.02,-.01,.08,-.1,-.16,.02,-.35,0,-.21,.1,-.21,.13,.14,.14,.13,-.11,-.11,.56,-.3,-.17,.32,-.13,-.2,-.16,-.39,.35,.09,-.04,.11,.25,.35,-.28,.04,.46,.41,.16,.11,.15,-.04,-.08,-.18,.04,.09,.05,.17,-.43,-.4,-.32,.19,.14,.05,-.09,.2,-.15,.37,-.01,.4,.1,.18,.09,.19,.54,-.03,.02,.14,-.12,.2,-.12,.31,-.2,-.01,-.28,.08,.27,-.08,-.16,-.12,.13,.07,.16,.04,.32,.2,.04,-.06,.57,.15,.1,.08,-.17,.08,-.25,-.11,-.4,-.17,-.03,-.2,-.07,.1,.02,.24,.15,.02,-.24,.2,.15,-.24,-.01,-.13,.08,0,-.13,.17,.16,.05,.36,-.11,.27,.25,.2,-.06,-.25,.04,.24,.31,.1,.01,.04,-.21,.09,-.07,.05,.04,-.37,.48,-.16,-.09,.07,.47,-.07,.14,.17,.32,-.04,.11,.14,.14,.15,-.07,.1,-.2,-.02,.31,-.29,-.03,-.19,.36,.31,.12,.18,-.48,.26,-.2,.14,-.12,0,.05,-.02,.13,.2,.49,-.39,.21,.05,.09,-.32,.19,.23,-.56,-.02,.13,-.06,.16,.1,.11,-.34,.12,-.47,-.4,-.21,.08,-.21,.34,.06,.17,-.2,-.5,.17,-.12,.29,.01,0,.18,.05,-.01,.22,-.06,-.23,-.28,.06,.17,.17,.26,.11,-.45,-.21,.12,.06,.18,.17,.49,-.08,.18,.02,-.22,-.56,.15,-.18,.29,.05,.14,-.35,.36,.05,-.22,-.38,-.06,.06,.04,.31,-.42,.26,-.01,.17,-.09,.06,-.22,.39,.04,.36,.11,-.25,.24,.05,-.09,-.18,.01,.02,.36,.09,.1,.17,.38,-.35,.04,-.05,-.09,.24,.11,.15,.04,-.42,.27,.25,.12,.19,.61,.21,.08,.15,-.04,.1,-.43,-.29,-.17,-.04,-.33,.93,.13,-.11,.08,.01,.16,-.35,.11,.24,.36,.22,-.03,-.25,.17,-.2,-.16,.21,-.08,-.06,.24,.15,-.34,.17,-.1,.3,-.23,.29,.41,.14,.03,.55,-.07,.27,-.33,-.05,.01,-.14,.19,.39,.11,-.39,.1,-.09,-.25,.19,0,.05,.07,.11,.15,0,.22,.09,-.11,-.29,.02,.21,.07,.22,.21,.03,.22,.54,.22,.5,-.28,.11,.2,.1,.05,.16,-.02,-.16,.05,.37,-.16,-.11,.2,.24,.19,-.19,-.15,.08,.03,.01,.13,.09,.12,.6,-.42,.12,-.2,.31,.01,-.05,-.16,.25,.2,.57,.16,.07,-.08,.19,-.08,.19,.22,-.05,.13];export{a as rvalData};
