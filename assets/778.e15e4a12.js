const a=[.22,-.06,-.28,-.13,-.21,.28,-.06,.86,.53,.16,.19,-.26,-.04,.04,.02,.02,.01,-.12,-.17,.17,-.02,-.38,.1,-.05,.29,.09,-.6,-.04,-.18,-.61,.18,-.33,.03,-.06,-.15,.04,-.12,.11,-.08,-.25,.03,-.05,-.07,0,-.01,.17,-.15,.14,-.15,.49,.37,.02,-.24,-.07,.28,.31,.35,.23,-.14,-.05,.36,-.09,.04,.04,-.11,-.55,.04,-.03,.1,.03,.05,-.12,.56,-.2,-.2,-.06,-.04,.38,-.17,-.2,.14,-.07,.13,-.01,-.23,-.4,.17,.1,.14,-.04,.12,-.02,.82,.11,0,.13,.18,-.05,-.14,.43,-.05,.04,.03,.05,.2,.02,-.2,-.15,.16,.01,.17,.44,.06,.21,-.07,-.23,-.2,-.41,.13,.42,.03,-.14,.2,.14,.27,.3,-.22,.06,-.47,-.09,.77,.51,.12,.51,-.17,-.01,.51,.14,-.44,.01,0,.05,.2,.21,.19,.29,.09,-.08,.24,.17,.02,.88,.02,.24,.89,.19,-.1,-.03,.06,.07,.43,.02,.14,.25,.83,.41,-.08,-.4,.25,.1,.16,-.3,.65,.55,.14,-.28,.1,-.53,.53,-.1,.01,-.04,-.01,-.49,.21,.15,.06,.03,.41,0,-.01,.79,-.15,.48,.28,-.13,-.04,.02,.02,-.34,.29,.47,-.04,.18,.19,.07,.19,.5,.51,-.08,.85,-.03,-.03,.02,.2,.2,-.05,.87,-.36,-.1,.11,.13,-.1,-.11,.25,-.08,.81,-.39,.17,.1,-.01,.02,.01,-.38,-.15,.16,-.15,.16,-.02,.08,.48,-.14,.83,.54,.89,.84,-.12,.29,-.2,-.05,.36,-.2,.28,.16,-.04,-.02,-.11,.42,.08,-.48,-.04,-.02,.55,0,.06,.17,-.16,.1,.31,.18,-.3,.15,-.01,-.25,0,-.14,-.54,.51,-.08,-.14,.55,-.28,.26,.04,.29,.32,-.35,.04,.11,-.34,.7,.34,.08,.79,.53,-.09,.44,-.09,.4,.18,.2,-.31,-.4,.06,-.15,.15,.02,.22,.06,.28,.07,-.01,-.14,.18,-.15,.17,.16,.12,-.3,.02,.03,-.14,-.04,.01,.38,.29,.02,-.17,.2,.28,.25,.21,.02,-.1,-.54,-.15,-.46,.18,.67,-.1,.64,-.25,-.11,0,-.14,-.28,.03,.43,-.05,.49,.17,.53,.17,.28,.24,.28,.1,-.17,-.2,-.42,.34,.12,.23,-.12,.07,.18,.06,-.1,.15,-.06,-.41,-.07,.49,.35,.25,.27,-.04,.03,.03,.27,.09,-.07,.02,.07,.07,.07,-.13,-.16,-.08,-.1,-.11,-.11,-.07,.48,.5,-.31,-.28,-.08,-.15,.19,-.36,.17,-.17,.45,.35,-.13,-.09,-.15,.1,-.03,-.29,.15,.01,-.09,.08,.04,-.02,-.3,.54,.23,.27,-.07,-.27,-.04,.25,-.16,-.15,-.2,.31,.4,.83,.32,.45,.1,.48,-.22,.53,0,-.16,.18,.02,.15,.18,.37,.29,.24,-.3,.08,.55,-.09,.62,.38,-.03,.03,.07,.03,-.36,-.12,.33,.4,-.23,.08,.23,.42,.16,.13,-.02,.15,-.11,-.09,-.14,-.14,0,.07,.36,.19,.27,.78,-.17,-.39,.15,-.08,-.24,.8,.27,.14,.27,.37,-.12,-.4,.01,-.24,.42,.11,-.17,-.04,.23,.08,.1,.5,.37,-.1,-.06,.01,-.02,.15,-.16,.18,-.21,.34,.08,.21,.08,.16,.31,-.32,.35,.72,.47,-.01,-.31,-.25,.08,.01,-.19,.08,.12,-.13,.16,.27,.69,.25,.16,.54,.15,.26,.15,.06,.19,-.18,-.03,.08,-.14,-.51,-.05,.03,.24,-.53,-.18,-.16,-.44,-.09,-.17,-.38,.23,-.09,-.22,.47,-.02,.08,-.23,-.34,.25,.85,.15,.04,0,-.05,.35,.05,-.25,-.35,.47,.44,-.17,-.31,-.02,-.05,.32,-.14,-.08,.1,.1,.14,.34,-.14,-.22,-.11,-.19,-.15,.13,.06,-.12,-.19,.85,-.05,.25,-.33,.24,.59,.06,-.14,-.31,.43,-.2,-.62,.37,.04,-.02,-.26,-.03,-.09,-.06,.78,-.06,.21,-.28,.84,-.16,.09,.36,.31,.18,.07,.22,-.16,.42,.06,0,.78,-.03,.33,.13,.4,.05,.26,.15,.62,.62,-.45,.19,.06,-.23,-.05,-.13,.02,.27,.01,-.18,.33,-.08,-.05,.62,-.18,.19,.1,-.14,-.03,-.04,.18,-.31,-.15,-.1,.12,-.09,.03,.04,.15,.37,.1,.42,-.05,-.06,-.57,.08,.32,.17,-.18,.03,.04,.27,.06,-.3,.01,.41,.2,.09,.05,.15,.77,.05,0,-.01,-.07,.02,.52,.03,.18,-.16,.13,0,.91,.66,-.16,.04,-.12,-.1,-.31,.16,-.55,.19,.54,.18,.66,-.08,.04,.52,-.03,.07,-.01,.87,-.07,-.11,.13,-.08,-.33,.08,-.37,.04,-.27,.06,.34,-.1,-.17,.54,.52,-.11,.04,-.12,.05,.06,-.02,-.21,-.58,.1,.24,.44,-.14,.26,.37,.07,-.11,-.3,.32,-.08,.24,-.05,-.51,.06,-.2,-.41,-.45,.14,.08,-.48,-.15,0,-.1,0,.23,.13,.18,-.11,.2,.34,.01,.39,1,-.18,.15,-.28,-.14,.01,.01,-.33,0,.29,.47,-.08,-.39,-.32,.17,-.04,-.05,-.01,-.41,-.25,.2,.08,.05,.58,-.02,-.03,-.06,-.02,.24,.73,-.14,.08,-.03,-.02,-.12,-.11,-.23,.06,.63,.11,-.28,-.19,-.15,-.12,.42,.84,-.13,-.01,-.13,.08,.27,-.14,.03,0,-.05,.2,-.22,-.13,-.3,-.08,.35,.06,-.33,.02,-.04,.03,.67,-.2,-.18,-.13,-.28,.68,-.01,.24,-.46,.47,.13,-.02,-.02,.11,.09,.85,-.06,.43,-.12,-.04,.02,.05,.28,-.23,.16,.53,.84,.34,.13,0,.34,.23,.1,-.22,.38,.08,.19,-.58,.31,.18,-.08,-.14,.33,.35,.25,-.07,.81,-.05,.04,.1,.31,-.13,-.1,-.01,-.05,-.2,.12,.27,-.08,-.07,.06,.1,.23,.15,.51,0,.56,.1,-.57,-.31,.24,-.17,.3,.06,.49,.7,.16,.32,-.03,.26,-.05,-.06,-.26,.2,-.27,-.14,.06,.79,-.3,-.23,-.09,-.05,.16,.54,-.11,.09,-.1,-.1,-.04,.18,.11,.29,-.05,.98,-.05,0,-.05,.87,.12,.09,-.05,.64,.04,-.05,-.23,-.06,.22,.16,-.01,.75,.21,-.05,.12,.04,.44,.17,.14,-.43,.16,-.18,.13,-.02,.32,.33,.11,.59,.22,-.11,.73,-.36,.9,.69,.81,.39,.12,.09,.23,.43,.75,.62,.75,.05,.4,0,.3,.09,-.11,.08,-.01,-.12,-.06,.03,-.23,0,-.1,-.14,-.04,.15,.46,.38,-.39,.38,0,.71,.3,.08,-.08,.02,-.06,.09,.22,.09,.14,.11,.22,.05,-.16,.46,-.01,0,.23,.04,.54,.02,.75,-.03,.1,.48,-.27,-.38,-.07,.08,.35,.03,.1,-.13,-.13,.37,.38,-.22,.54,.15,.19,-.18,.26,.15,.17,-.36,.08,.49,.12,.33,.26,-.44,.45,-.27,-.09,.41,.38,.26,-.34,-.1,.45,-.2,.51,.15,-.13,.12,-.27,0,-.01,.48,-.38,.09,.11,-.37,.3,-.1,.01,-.15,-.28,-.4,.07,.83,.11,.05,-.03,.79,-.15,.48,.41,-.27,.46,.03,.08,.04,-.02,-.2,.51,.43,-.03,-.26,-.3,.07,.16,.38,-.04,-.15,-.18,-.07,-.03,.02,.1,.13,-.21,.06,-.14,.39,-.02,-.21,.1,.07,-.25,.15,.28,.23,.29,.03,-.18,.19,.14,.02,.18,.11,-.51,-.17,.48,-.01,.06,.33,-.12,.02,.23,.16,.51,.1,.14,.47,.37,.01,.5,.13,.05,-.13,-.05,-.1,.4,.26,-.05,-.12,.22,.27,-.14,-.15,.01,.13,.08,.57,.01,.05,.29,-.02,.05,-.22,-.12,-.18,-.41,-.23,.71,.58,-.07,-.09,.11,.06,-.05,-.04,-.43,-.06,.26,.12,-.09,.14,.08,.16,-.33,-.44,.81,-.23,-.31,-.17,.44,-.05,.06,.34,-.02,-.29,.16,.15,.12,.26,.2,.17,.13,-.01,-.42,-.03,.01,-.56,.21,.05,-.07,-.26,.44,.11,.02,.03,.16,-.12,-.06,-.21,.12,.18,.1,-.03,-.07,.24,.19,.08,.21,.08,.11,.04,.5,.17,-.22,.9,-.03,.14,-.24,.55,.56,-.42,.15,-.63,-.44,.69,.06,-.13,.09,.12,-.17,.04,.8,-.16,.04,.62,.03,.24,.25,.31,.64,.38,.1,-.26,-.11,.01,.16,-.02,.09,0,.33,.23,.39,.02,-.12,.23,.17,.15,.48,.54,.17,-.19,-.2,.44,.32,-.07,-.22,.11,-.28,.22,.02,.05,-.06,.36,.36,-.15,.03,.21,.18,-.07,.38,.24,.11,-.47,-.1,-.24,-.36,-.09,-.1,.3,.2,-.26,-.03,.73,.03,0,.19,.74,.07,.12,.03,.42,.19,-.17,.28,.09,-.07,.48,.49,.08,.31,.1,.39,.32,.52,.04,.58,.19,.13,-.07,.56,.39,.59,.24,.46,-.01,-.18,.18,.54,.53,.02,.26,.39,.55,.37,.17,.64,-.06,.67,.65,-.11,.65,.31,-.02,.05,.37,.1,.28,.16,.36,.36,-.08,-.18,.63,.23,-.17,.02,.53,-.09,-.4,-.31,.16,0,.24,.46,-.25,.1,-.02,-.19,.18,.2,.03,-.04,.07,-.25,.24,-.05,.15,.15,.16,.47,.49,.04,-.05,.07,-.06,.12,.23,.34,.04,.17,0,.22,.08,.06,.6,0,.17,-.16,.67,.01,.05,.63,-.02,-.18,.05,.2,.24,.53,-.1,.43,-.05,.18,-.04,.41,-.21,0,-.11,.06,.07,-.3,.31,.09,0,.06,-.14,.06,.34,.02,.58,-.36,.03,.17,.16,.15,.34,-.07,.37,.12,-.01,.14,.51,.1,.32,.5,.07,.18,.56,.08,.37,.22,-.16,.09,-.01,.12,.05,.24,.29,.53,-.06,.39,-.14,.4,-.1,.33,.03,.31,.36,0,.03,.49,.07,-.12,-.08,.13,.09,.12,.11,.18,.38,.15,-.12,-.1,-.04,.18,-.08,-.49,.04,.17,.45,.38,.08,.1,.15,0,.45,-.25,-.05,.36,-.2,.07,-.04,.38,.11,.4,.24,-.36,.18,.44,.13,-.1,.02,.14,.14,-.38,-.02,.22,-.07,-.17,-.2,.23,.13,.7,.04,.27,-.12,-.11,-.11,-.24,.44,.11,.19,.3,.51,-.45,.29,-.05,.46,-.06,-.07,-.06,.17,.8,.56,-.22,-.26,.11,-.02,-.14,-.09,.52,.38,.66,-.3,.65,.16,.2,.06,.11,-.18,.35,-.12,-.23,.03,-.15,-.26,.83,.58,-.29,-.03,.4,.53,.36,.29,.18,.37,.1,.26,.11,.08,.31,.19,.22,-.01,.03,.06,.15,-.34,.09,.12,0,.38,0,.47,-.09,.4,.09,.39,.1,.05,.46,.66,.44,.09,-.01,.11,.1,.06,.14,-.16,-.14,.05,-.11,.18,.8,.2,.31,-.11,-.15,-.32,-.01,-.13,.3,-.36,.43,.26,.37,-.07,.34,.02,.67,.18,-.04,-.03,.03,-.32,.25,.05,-.02,-.13,.91,.07,.32,.06,.01,.42,.82,-.16,.35,.21,-.18,.08,-.07,-.17,-.01,.35,.05,-.14,.05,.32,.07,-.19,-.11,.27,.15,.09,.04,-.03,.07,.31,.16,.31,-.24,-.31,-.45,.09,.03,-.06,-.38,.5,-.24,-.13,.42,.75,.07,-.22,-.01,-.11,.31,.24,-.28,.18,.25,.49,.42,.52,.03,.22,.18,.03,.01,-.06,-.09,-.37,-.07,-.15,-.27,-.1,.18,.03,.11,-.51,-.18,.03,.22,.36,-.1,.88,.05,-.25,.2,-.11,.16,.14,-.03,.06,.16,-.03,.01,-.3,.48,-.27,.74,-.55,-.12,.07,-.09,-.27,-.11,-.36,.36,.18,-.07,.25,.36,.14,-.06,.21,-.16,.15,.44,.35,.24,.05,.18,-.11,-.07,.07,-.4,-.13,.08,.09,.24,.35,.12,.53,-.17,.13,-.35,-.27,-.2,-.15,.12,-.05,.11,-.13,.03,.22,.06,.35,.03,-.05,.18,.2,.11,-.32,.2,-.32,-.14,-.06,-.01,.02,.16,.25,.12,.34,.68,.68,0,-.06,.02,.58,.43,-.11,-.17,.05,-.05,-.01,.01,.26,.19,.09,.03,.03,.68,.37,.25,-.15,.36,-.05,.51,.11,.27,.14,.59,-.11,.05,.05,-.14,-.08,.58,.41,.45,.19,.22,.13,-.09,-.04,.07,-.03,-.01,.09,.11,-.04,-.06,-.13,-.37,.08,.43,.04,.18,.09,.27,.02,-.3,.04,.14,-.06,-.03,.13,-.02,-.08,-.05,-.41,.61,.34,.44,.3,.27,-.05,.3,.15,.04,-.03,-.23,.23,.09,-.04,.28,-.13,.29,-.28,.02,-.16,.06,-.17,-.1,.12,-.01,.22,-.16,-.14,.27,.07,.05,.14,.1,-.12,-.15,-.39,-.13,-.4,-.34,-.13,.11,.03,.1,.08,.27,-.06,.17,-.22,.05,-.07,-.06,-.06,.12,.71,.13,-.11,0,-.29,-.25,.75,-.05,.22,-.37,.12,-.28,-.06,-.1,-.28,.08,-.19,.4,-.02,.52,-.11,-.27,.4,.06,-.51,.17,-.02,.44,.34,.01,.23,-.29,.1,-.21,.13,0,.13,.07,.39,-.05,0,-.06,-.18,-.01,.09,-.01,-.12,-.12,.87,.06,-.38,.22,.17,-.09,-.05,-.2,-.11,-.11,-.42,.06,-.22,.01,-.06,-.01,-.17,-.12,.54,0,-.17,.37,-.2,-.08,.17,-.29,.58,-.07,-.04,.02,-.13,0,-.25,.15,-.51,.6,-.18,.22,0,.21,.09,-.03,-.4,.03,-.36,-.05,.22,.39,-.13,.02,-.11,.23,.08,.29];export{a as rvalData};
