const a=[-.31,.38,.83,-.09,.78,.1,.14,-.12,.15,.25,.56,.15,-.15,-.75,.7,-.02,.27,-.03,-.25,-.05,.04,-.15,.12,.51,.59,.72,-.08,.09,.26,-.02,.49,-.09,.83,.11,.37,.22,.87,.59,.17,.6,-.04,.72,.56,-.07,.04,.42,.02,-.03,.08,.08,.13,.08,.42,.78,.4,.42,.39,.09,.21,.66,.39,.77,.74,-.08,.14,-.01,.82,.63,-.09,-.07,-.04,.52,.22,-.18,.74,.1,-.14,.33,.57,.11,-.51,.48,-.12,.62,-.11,-.06,.63,.08,-.7,.63,.07,.06,.11,-.74,.17,-.12,-.74,-.07,-.1,.3,-.16,.81,.45,-.17,.45,0,-.24,-.18,.8,.55,-.04,.25,-.08,-.68,.08,.71,.22,-.05,-.19,.53,-.15,-.13,.38,-.25,.02,.39,.73,-.24,.01,.85,-.12,-.31,-.13,.06,.44,-.19,-.03,.06,.05,-.02,.77,.07,.51,.65,.07,-.05,.03,-.08,.7,-.1,.8,-.05,.07,.12,-.15,.08,-.13,.12,-.12,.63,-.07,.66,.07,.16,.14,.21,.51,-.02,0,.64,.06,-.01,-.06,-.4,.51,.1,.02,.03,.13,.83,-.08,.1,.1,.71,.44,-.14,.24,.28,.15,-.15,-.16,.13,.17,.48,.71,1,.63,.4,.05,-.07,.26,.53,.84,.08,-.52,.56,-.08,.17,.22,-.2,-.15,.65,.07,.76,.1,.23,-.01,-.02,.11,-.19,.51,.31,.4,.85,.44,.86,-.06,.1,.36,0,-.12,-.14,.49,.8,.13,.12,.56,.19,-.01,.09,.23,.64,-.26,-.25,.1,-.16,.24,.07,.21,-.03,.04,-.24,.37,.16,.82,-.08,.13,.34,.04,.72,.08,-.07,.42,.79,-.09,.41,-.12,.65,.09,.45,.14,-.36,.84,.81,.65,-.1,.2,.21,.78,.05,.06,-.16,.39,-.64,.16,.62,-.01,.79,.11,.07,-.1,.12,.72,-.1,0,.58,.29,-.14,.05,.27,.11,.84,-.01,-.21,.17,.35,.15,.55,-.02,.31,.59,-.11,-.23,.05,.38,.26,.06,.01,.77,.32,.57,.03,.63,.77,-.11,.11,.79,-.23,.15,.14,-.6,.5,.23,-.02,-.26,0,.01,.46,-.09,.02,.38,.57,-.27,-.06,.84,.84,.08,.11,.51,-.01,.73,-.36,.24,.13,-.51,.46,.32,.05,.77,.76,.31,.1,.07,-.22,-.05,-.68,.13,.86,.26,.02,.24,-.35,.05,-.11,.33,.18,.13,.61,0,.08,.14,.11,.12,.09,.07,.39,.02,.07,.85,.86,.85,-.17,.09,.01,-.03,.84,-.32,-.19,-.21,.06,-.08,-.03,.82,.27,.1,.16,.56,.81,.63,.6,.75,-.56,-.31,.84,.13,.06,.76,.73,.06,-.45,.15,.77,.09,-.1,.07,.85,.83,.04,.07,-.4,-.29,-.14,.47,.21,-.08,.69,-.22,.83,.85,.69,.66,.53,.53,-.09,.15,.43,.84,.73,-.19,-.4,.34,.33,-.83,-.02,-.16,-.02,-.04,.87,.03,.49,.76,.8,-.73,.2,.11,.26,-.44,-.06,-.41,.81,-.11,.86,.62,.16,.03,.8,.72,.09,.98,-.13,.65,.73,.79,.18,.13,-.01,.45,-.28,.43,.69,.14,.15,-.25,-.29,.82,.82,-.06,-.14,.71,-.22,.13,-.16,.69,.45,.67,-.24,-.05,.83,.8,.33,.77,-.05,.61,.03,.15,0,.21,-.01,.17,.63,.01,.87,.12,-.04,.31,.07,.24,.42,.08,.68,.08,-.09,-.26,-.19,.03,.12,.17,.42,-.29,.24,.15,.08,-.18,.12,.06,-.26,.09,.15,.64,-.06,-.06,.87,.85,.79,.52,-.17,-.37,-.31,-.33,-.16,.73,.01,-.01,-.1,-.22,-.25,-.14,.04,.23,-.04,.74,.78,.14,-.32,.73,.84,-.22,-.24,.1,.16,.06,.3,.64,.07,.5,.69,.87,.55,0,.84,-.23,.13,.02,.74,-.14,-.69,.75,.75,.37,.2,.75,.76,.81,.22,.64,-.06,.02,-.16,.23,-.12,.09,.79,-.04,.15,-.23,-.01,.87,-.13,-.04,.11,-.08,-.12,.26,-.07,-.04,.01,.03,.09,.72,-.27,-.2,-.47,-.28,.14,.5,.42,.82,-.19,-.13,-.09,.03,.67,-.24,.12,.32,.74,-.37,.64,.13,.48,-.07,-.75,-.07,.89,.8,.16,.55,-.1,-.27,-.04,.85,.58,.86,.11,.29,.23,.09,-.02,.5,.62,.22,.18,-.14,-.07,.43,-.29,.62,.75,-.45,.15,-.11,-.25,.49,.69,-.03,.28,-.56,.67,.8,-.17,-.08,-.22,-.15,-.28,-.03,-.28,.47,.21,.6,-.46,.6,-.04,.25,.66,.15,-.06,-.15,.52,-.03,-.08,.83,-.19,.23,.23,-.09,-.16,-.13,.18,-.21,-.15,-.03,.75,.85,-.07,.65,.54,-.24,-.14,-.14,.69,-.55,.29,.87,.17,.28,-.05,.85,-.17,.15,-.13,.53,.73,-.14,.05,-.15,-.39,.19,.83,-.05,.39,-.03,.15,-.08,.07,.72,.18,.1,.43,.71,.02,.37,-.04,.82,.37,.45,.73,.76,-.21,-.07,.07,-.26,-.06,.79,.08,.07,-.33,.23,-.13,.83,.1,.81,.11,.13,.73,.8,.69,.29,.25,.19,.02,-.28,-.13,.62,.55,.79,0,.89,.51,-.43,.34,-.21,.25,-.47,.84,.72,.46,.34,-.14,.1,-.03,.08,-.16,.85,-.22,.52,-.18,-.76,-.03,.05,.83,.11,.01,-.13,.63,-.15,.85,-.1,.27,-.13,-.07,-.02,.84,-.07,-.13,-.04,-.03,-.09,.17,.23,-.1,.59,.69,-.22,-.28,-.06,.8,-.08,-.01,.33,.06,-.06,.03,.29,-.06,.09,.18,.12,-.02,.1,.07,.52,.83,.03,-.38,-.21,-.17,-.37,.2,-.23,-.29,-.37,.25,-.17,.07,-.18,.03,.15,.09,-.07,.16,-.03,.69,.13,.77,.75,-.1,.07,.3,.85,-.17,.73,-.66,-.57,.38,.73,-.08,-.37,-.27,.56,.77,.4,-.15,.05,-.1,.04,.65,.07,.02,.15,-.15,-.06,.05,.15,-.27,.62,.34,.09,-.11,-.33,.01,-.16,-.15,-.4,.56,.84,.78,.08,.83,.74,.05,.14,.75,.71,.74,.56,-.86,.25,-.12,.53,.79,.15,.2,.03,.48,.02,.08,-.13,.92,.16,0,-.23,.02,-.07,.09,-.07,.12,.8,-.12,.69,.23,.78,.18,-.17,-.04,.63,.13,-.05,.24,-.6,-.24,-.09,-.24,.59,-.76,.57,-.08,0,.14,.09,.81,.82,-.19,-.23,-.02,.25,-.22,-.4,.19,.18,.29,.34,-.19,.05,-.15,-.19,-.08,.01,.04,.01,.2,-.09,-.09,.14,.03,.15,.16,-.03,.19,-.17,.12,-.06,.46,.1,.01,-.07,-.27,.38,-.37,-.28,.1,.6,.01,.33,.38,.09,-.02,.83,0,.22,-.06,-.16,-.08,.35,.17,-.15,.47,.8,-.15,.39,-.06,-.01,.87,-.26,-.25,-.04,.04,.09,-.23,-.11,.51,-.03,.62,.31,.12,.22,-.05,-.26,-.04,-.13,.76,-.02,.05,0,.62,.08,.08,.01,.28,.73,-.17,.1,.12,.37,.86,.05,.46,.85,-.14,.58,.78,.12,-.03,.08,-.07,.26,.14,.01,-.33,-.13,.54,-.05,-.36,.76,-.04,.68,.6,-.12,-.02,.86,.79,-.23,-.31,-.38,.18,.82,.26,.65,.1,.76,.15,-.2,.25,.28,-.08,-.01,-.14,-.29,.62,.09,.8,-.16,.68,-.07,.21,-.29,.02,-.08,.56,.03,-.14,-.26,.78,.83,-.33,.13,.76,.78,-.21,.12,-.26,.78,.26,-.03,.35,.76,.04,.76,.51,.68,-.22,.13,-.27,.17,.71,.13,-.03,.05,-.11,.18,.04,.47,.5,-.04,.01,.72,.35,.84,.63,.71,.42,-.07,.31,-.67,.15,.52,.1,.81,.07,.31,-.15,-.22,-.11,.22,-.28,-.42,.19,.81,.83,-.03,.8,-.06,-.1,-.38,.18,.9,.1,-.27,.79,.81,-.43,.06,.52,.09,.89,.15,.72,-.24,.81,.52,-.06,.91,.1,-.3,-.32,.64,.01,-.22,.63,.51,-.01,-.07,.58,.52,.04,.08,.14,-.06,-.11,.12,.01,-.09,-.38,.8,.14,.76,.67,.48,.09,-.03,.05,.83,.75,.85,-.1,.06,-.05,.07,.29,.63,.1,.76,-.12,-.08,.08,.21,-.13,.42,-.34,-.28,.74,-.64,.84,-.18,-.17,-.01,.3,-.12,-.01,.2,.09,.78,-.1,.76,.2,.28,-.23,.53,-.22,-.22,-.17,.53,.06,.55,-.1,.12,.04,.86,.1,0,.12,-.12,.63,.78,.55,-.26,.05,.09,.77,.45,.56,.77,.38,-.15,.04,.1,.7,.22,-.22,.86,.02,.33,.82,-.81,.25,-.11,.08,.16,.57,.84,.07,.12,-.14,-.36,-.34,-.03,-.14,.75,.73,.62,-.16,-.06,.87,-.28,.25,-.14,.06,-.27,-.03,-.02,.76,.31,-.35,-.4,.46,.38,-.03,.16,.54,-.01,-.18,.31,.2,.65,.42,0,.26,.03,.21,-.02,.03,.66,.63,-.16,-.01,-.38,.05,.66,.13,.07,-.16,-.37,.25,.25,.68,.04,.04,-.17,-.27,.28,-.31,-.09,-.11,-.02,-.01,.08,.54,.14,-.07,.45,.74,.1,.64,.06,.36,.85,.47,-.23,.05,.82,-.37,-.05,-.1,.21,.79,.5,.61,-.03,.21,-.44,-.15,.82,.78,.26,0,-.11,.78,.03,-.02,.27,-.05,.43,.09,.03,.11,-.09,.05,.73,-.21,0,.73,-.03,.13,.79,.15,.64,.65,.03,-.09,.26,.08,.23,.71,-.33,.67,.11,-.12,-.07,-.19,-.07,.61,-.4,-.32,.25,.5,.76,.6,.7,-.08,.1,-.02,-.04,-.07,.38,.07,.39,.73,.28,-.19,.46,.58,.06,-.26,-.38,-.03,.68,-.09,.67,.65,.41,-.18,.06,.55,-.12,.36,-.12,.61,.31,.12,-.04,.3,-.28,.8,.28,.03,.03,.24,.08,-.05,.09,.66,-.03,.15,.73,.09,-.5,.53,.81,.27,-.07,.42,.54,.18,-.05,.34,-.2,.1,.65,-.26,.44,.46,-.07,.11,.3,.34,.01,.28,.78,-.02,.18,-.01,-.21,.62,.15,.31,.72,-.1,.03,.8,.45,.87,.85,-.01,.81,.76,.81,.25,-.27,-.03,.44,.2,.51,-.02,.69,.69,.08,.07,.64,.44,.73,.4,.17,-.1,.65,.32,.28,.02,.57,.22,.65,.1,.79,.78,.39,.69,.09,.73,-.04,-.11,.54,.67,-.32,.03,.84,.53,.58,.14,.35,.26,.84,.76,.76,-.03,-.08,.11,.02,-.16,.79,.01,.15,.67,0,.34,.35,.26,.82,.83,-.23,-.15,.85,.15,.31,.8,-.22,-.22,.45,.46,.21,.62,.31,.75,.2,.77,-.33,.5,-.15,-.01,.01,.16,-.03,.18,.83,.23,.57,.13,.38,-.03,-.02,.79,.62,.64,.62,.65,-.15,-.04,-.07,.22,.43,-.06,-.24,.61,.56,.6,-.02,.6,-.15,-.07,.37,.1,.53,-.18,.1,.82,.84,.82,.81,.01,.75,.43,.61,.33,-.45,.49,.16,-.42,.63,-.21,.71,-.12,.81,.65,.13,.75,-.21,.05,.45,.17,.09,.45,.2,-.12,-.08,.02,.14,-.03,-.07,.78,.94,.61,-.1,.68,.61,.6,.69,.57,.84,.07,-.19,-.19,.61,.08,-.49,-.15,.16,.2,.09,.88,.81,.56,-.29,.68,.46,-.06,.23,.16,.74,.67,.35,-.29,.02,-.07,-.09,.09,.22,.86,.5,.73,-.16,.28,.21,.79,.07,-.03,-.24,.01,.86,-.02,.79,.45,.86,.79,.13,.5,.72,.78,-.06,.17,-.18,.39,-.47,-.21,-.14,-.75,-.05,-.4,-.09,0,-.22,.15,.54,.55,-.17,.72,.84,-.45,.76,-.22,-.16,-.49,-.13,.87,.84,.82,.44,.1,.52,.39,.42,.43,.32,-.01,.83,.9,.54,.4,.34,.24,.03,.48,.68,.8,-.02,.09,-.1,-.07,.7,.27,.45,.05,.43,.93,.64,.75,.84,.83,.81,-.01,.62,-.04,-.26,.88,.04,-.25,0,.76,.87,.68,.23,.04,.55,.33,.8,.2,-.03,.08,-.15,.06,.04,.75,-.43,.25,.03,.82,-.25,.51,-.01,-.18,-.14,-.01,-.24,-.2,.78,-.03,-.02,.45,.05,.25,.57,-.12,-.46,.05,.08,.67,-.15,-.17,.6,.5,.54,.03,.74,-.14,.67,.05,.87,.11,.31,.24,.05,.42,.18,.28,.01,-.74,-.33,-.18,.65,.74,.75,.63,-.29,.04,.57,.29,.12,.16,-.2,-.02,.69,.8,-.04,.65,.74,.15,.23,.24,.82,.76,-.01,-.23,.25,.44,.54,-.01,-.31,.43,.23,-.16,.05,.84,-.28,.08,.63,.02,-.1,.53,.06,.14,-.15,.8,-.3,.65,.01,.04,-.24,.03,.68,.29,-.05,.12,.08,-.03,.88,.85,.77,.15,.79,.83,.79,.61,.79,-.12,.05,.34,.7,-.02,.42,.05,-.21,.09,.77,.69,-.34,.58,.06,.55,.82,.02,.12,.11,.03,-.42,-.09,-.08,.04,.61,.83,.36,.87,.38,.12,.31,.45,.38,.2,-.15,.42,.51,.79,.05,-.15,-.61,.29,.75,.35,.84,.23,.8,.16,-.01,.63,-.6,.7,.83,.84,.27,.63,.31,.78,.44,-.02,.34,.83,.65,.58,.86,.74,.8,.13,.86,.45,.23,-.11,.8,.74,.72,.78,.73,-.22,.72,.77,.27,-.65,.79,.09,.87,-.28,-.02,.7,.41,.76,.81,-.05,.1,.22,-.2,.83,0,.7,.5,.6,-.27,-.11,.13,.11,-.05,.15,.21,.12,.08,.8,.11,.04,.51];export{a as rvalData};
