const a=[-.32,.32,.74,-.04,.83,.15,.33,.01,.15,.26,.42,.08,-.11,-.7,.48,.06,.29,.07,-.24,-.07,-.18,-.34,.09,.25,.52,.76,-.36,.19,.39,-.33,.55,-.37,.77,.26,.17,.2,.7,.34,.31,.42,-.13,.8,.62,.01,.01,.16,.05,-.1,-.03,.17,.12,.03,.25,.71,.5,.25,.24,.21,.2,.74,.51,.71,.75,-.03,.19,-.17,.84,.35,-.15,.01,-.14,.39,.48,-.12,.8,.08,-.14,.5,.37,.08,-.48,.7,-.08,.74,-.1,-.27,.7,.16,-.74,.47,.28,.06,.22,-.61,.08,-.07,-.76,-.16,-.04,.57,-.12,.79,.51,-.12,.55,.09,-.18,-.23,.72,.59,-.02,.28,-.06,-.57,-.1,.66,.31,-.25,-.26,.54,-.18,-.15,.4,-.09,-.02,.47,.69,-.07,-.07,.73,-.05,-.44,-.08,.09,.32,-.09,.09,.19,-.23,.07,.85,.16,.74,.71,.09,-.14,-.09,.2,.72,-.24,.81,.02,-.03,0,-.02,.24,-.03,.06,-.19,.38,.04,.71,0,.27,.27,.44,.46,-.23,.09,.72,.11,-.05,.08,-.24,.6,-.11,.03,-.25,.34,.79,-.12,.11,.17,.54,.54,.03,.13,.25,.28,-.08,-.05,.28,.08,.64,.81,.75,.77,.35,.02,-.28,.13,.55,.75,-.01,-.52,.66,-.1,.33,.36,-.15,-.06,.48,-.04,.62,.19,.42,-.07,.1,-.15,-.47,.59,.4,.49,.75,.54,.76,.05,-.18,.33,.18,-.16,-.05,.43,.63,.1,.15,.46,-.08,.06,.12,.34,.47,-.09,0,.21,-.16,.17,.07,.27,-.03,.12,-.2,.5,.26,.9,-.1,.14,.38,.06,.58,.05,.15,.41,.86,.21,.52,-.15,.72,.07,.47,-.07,-.33,.73,.63,.59,-.02,-.1,.39,.69,-.05,.24,-.46,.27,-.46,.25,.52,-.3,.67,.13,-.17,-.06,.31,.72,-.12,.12,.67,.12,-.29,.02,.24,.02,.78,-.26,-.2,.14,.38,-.11,.59,.27,.07,.8,-.03,-.15,.1,.36,.21,.03,.22,.63,.2,.73,-.04,.45,.81,-.07,.25,.75,-.12,-.12,.27,-.55,.59,.21,.17,-.39,-.05,-.07,.43,-.2,-.35,.5,.68,-.25,-.1,.67,.7,.14,.4,.53,.13,.77,-.21,.22,.26,-.59,.32,.35,0,.71,.66,.3,.15,.23,-.27,-.16,-.56,.18,.75,.6,.2,.11,-.31,.08,.01,.54,.26,.28,.71,-.06,.28,.08,.1,.14,.11,.04,.4,-.11,.07,.68,.73,.71,-.11,.18,-.07,-.11,.77,-.51,-.19,-.06,-.02,-.1,.15,.7,.28,.25,.17,.46,.7,.72,.65,.58,-.56,-.13,.71,.22,.08,.86,.66,.26,-.39,.12,.63,-.06,-.13,.28,.74,.7,.05,.29,-.34,-.14,-.03,.49,.17,.1,.65,-.32,.79,.84,.72,.76,.72,.73,-.09,.13,.5,.73,.73,-.13,-.48,.29,.46,-.82,.08,-.12,.11,-.27,.76,.21,.49,.74,.74,-.66,.44,.01,.11,-.3,-.05,-.5,.68,-.17,.75,.53,.08,.27,.69,.56,.05,.74,-.44,.72,.58,.78,.29,.13,.12,.48,-.21,.5,.55,.05,.09,-.33,-.23,.82,.79,-.06,-.12,.59,-.05,.26,-.03,.62,.48,.75,-.11,.28,.63,.64,.57,.87,-.01,.75,.16,.12,-.08,.25,0,.38,.77,-.03,.82,.08,-.02,.6,.07,.02,.33,-.11,.65,.18,-.09,-.2,-.19,.09,.19,.26,.35,.01,.15,-.14,.28,-.17,-.17,.03,-.09,.15,-.15,.55,.13,-.36,.75,.74,.55,.59,-.18,-.37,-.11,-.3,-.14,.57,-.1,.1,-.08,-.11,-.25,-.12,.02,.3,-.05,.64,.67,.09,-.36,.78,.76,-.07,-.43,.27,.28,.01,.15,.8,.24,.51,.57,.78,.71,-.09,.67,-.16,.15,-.08,.67,-.06,-.64,.64,.69,.48,.14,.69,.78,.79,.16,.58,-.33,.2,-.15,.15,.04,.12,.61,.03,.27,-.21,-.07,.81,-.14,-.02,.09,.07,-.12,.26,-.07,.13,-.09,.2,.27,.83,-.28,-.18,-.6,-.37,.35,.34,.37,.69,-.07,-.13,-.31,.14,.8,-.45,.16,.34,.82,-.01,.73,0,.48,-.05,-.74,.05,.82,.69,.03,.28,-.16,-.21,.03,.78,.68,.78,.26,.22,.18,.04,.19,.63,.73,.23,.15,-.16,-.4,.47,-.13,.69,.8,-.31,.11,-.1,.05,.51,.65,.2,.3,-.59,.73,.77,-.14,-.04,-.14,.12,-.24,.06,-.32,.4,.2,.55,-.5,.76,.12,.41,.69,.15,-.04,-.08,.56,-.01,-.34,.82,-.11,.15,.09,-.09,-.07,-.16,.19,-.28,-.1,.06,.72,.65,-.07,.67,.6,-.32,-.31,-.22,.65,-.53,.22,.73,.03,.37,.09,.69,-.09,.2,-.14,.34,.55,-.42,-.18,-.12,-.41,.26,.62,-.04,.59,-.08,-.07,-.1,.32,.62,.1,-.16,.31,.68,-.13,.5,-.29,.74,.33,.36,.54,.72,-.18,-.19,.21,.09,.28,.78,.14,.3,-.26,.19,-.04,.79,.33,.7,-.14,-.08,.8,.63,.72,.41,.42,.19,-.29,-.31,.08,.62,.26,.8,-.21,.79,.7,-.34,.57,-.18,.23,-.48,.86,.54,.5,.33,-.22,.25,-.07,.08,-.1,.72,-.18,.57,.02,-.7,-.1,.24,.8,.1,.11,-.09,.58,-.11,.78,-.14,.3,.06,-.04,.15,.75,.14,-.14,.05,-.19,-.14,.18,.27,-.35,.68,.73,-.03,-.04,-.28,.77,-.13,-.27,.49,-.09,-.03,-.13,.33,-.14,0,.23,.28,.18,.19,-.04,.67,.78,-.18,-.38,.08,.08,-.34,.19,.11,-.22,-.28,.13,-.03,.29,.22,.25,.25,.18,-.11,.23,-.31,.5,.1,.79,.61,.03,.39,.3,.87,-.11,.77,-.55,-.53,.45,.7,.02,-.43,-.23,.55,.77,.28,-.19,.07,-.06,.05,.51,.1,.16,.11,-.05,.05,-.21,-.02,-.15,.64,.44,.05,.02,-.16,-.01,.19,-.08,-.44,.5,.87,.79,.15,.74,.73,.29,.26,.62,.61,.8,.73,-.8,.39,-.04,.59,.84,.05,.09,.21,.58,.08,.17,-.05,.71,.14,-.01,-.06,-.1,.12,-.11,.05,.23,.87,.2,.79,.18,.71,-.12,-.09,-.04,.71,.19,.02,.07,-.58,-.16,-.2,0,.37,-.77,.7,-.19,-.02,.24,.28,.67,.81,-.12,-.32,.1,.13,-.09,-.23,.17,.13,.35,.41,-.16,.23,-.14,-.19,.21,-.01,-.03,.15,.1,.06,.07,.19,.05,.28,.05,-.09,.4,-.07,.07,-.18,.59,.18,-.28,.06,-.22,.39,-.34,.03,.16,.76,.07,.41,.53,.03,.25,.72,.08,.17,.04,-.04,-.14,.32,.27,0,.54,.7,.03,.29,-.04,-.14,.77,-.34,-.01,-.1,.29,.13,-.35,-.18,.49,.05,.51,.39,.02,.35,-.33,-.35,.04,.23,.7,-.34,.03,-.07,.61,.28,.38,-.15,.23,.62,-.1,.3,.25,.53,.67,-.02,.45,.64,-.1,.7,.79,.12,-.25,.08,-.05,.37,-.01,.12,-.32,-.34,.67,-.02,-.15,.75,-.23,.5,.72,-.09,.16,.8,.76,-.19,-.34,-.23,.2,.73,.24,.62,.13,.68,-.04,-.23,.44,.45,-.11,-.1,-.26,-.15,.59,.31,.82,-.05,.46,-.18,.13,-.32,-.02,-.06,.36,.22,-.22,0,.77,.78,-.33,.17,.82,.74,.08,.2,.01,.79,.07,.01,.55,.86,.09,.72,.2,.61,-.33,.07,-.12,.35,.75,.03,.23,.08,.09,.27,.05,.53,.51,-.08,.29,.66,.37,.83,.59,.7,.42,-.05,.21,-.6,.25,.57,.13,.64,.09,.46,-.09,-.03,-.2,.07,-.16,-.37,.15,.76,.67,.01,.57,.09,-.1,-.31,0,.83,.05,-.17,.8,.81,-.15,.02,.58,.03,.81,.28,.81,-.07,.65,.45,.05,.79,.17,-.4,-.28,.48,.3,-.13,.75,.6,.29,.08,.76,.44,.09,.13,.31,.02,-.41,.41,.21,-.21,-.26,.71,.18,.8,.6,.56,.08,.01,.08,.69,.81,.69,-.09,.11,.01,-.03,.26,.65,.13,.8,-.13,-.04,.26,.19,-.13,.42,-.41,-.13,.77,-.7,.78,-.11,-.22,-.15,.37,-.38,-.28,.33,.07,.68,-.1,.75,.18,.3,-.22,.49,-.23,-.21,-.1,.71,.09,.38,.07,.13,.04,.8,.12,-.13,.15,-.11,.75,.8,.7,-.11,.24,-.16,.8,.44,.65,.7,.51,-.1,.1,.08,.42,.42,.08,.76,-.11,.37,.73,-.71,.34,-.03,.16,.35,.45,.72,.18,.24,-.03,-.32,-.19,.09,.06,.58,.79,.45,-.39,-.15,.8,-.22,.26,.04,.23,-.18,-.05,0,.71,.3,-.27,-.31,.4,.15,-.02,.09,.66,-.05,-.12,.37,.21,.51,.37,.08,.22,.11,.35,.15,.03,.47,.64,-.14,-.15,-.4,-.05,.64,.28,.07,-.28,-.37,.05,.13,.56,.12,-.23,-.31,-.37,.23,-.44,-.05,-.23,-.13,.03,0,.31,-.07,0,.57,.68,.15,.46,.31,.53,.73,.28,-.01,.08,.75,-.29,.08,-.07,.07,.64,.44,.36,.16,.4,-.38,.02,.71,.7,.21,.18,.1,.61,.11,-.09,.32,.09,.3,.19,.1,.34,-.15,.08,.5,-.25,-.15,.65,-.09,.23,.76,.38,.73,.73,.08,-.19,.43,.14,.41,.36,-.26,.77,.1,-.15,-.02,-.02,-.01,.33,-.39,-.33,.15,.52,.76,.53,.58,.13,-.08,-.05,-.05,.07,.32,-.16,.42,.68,.29,.05,.18,.35,.34,-.22,-.51,-.21,.69,-.14,.73,.46,.52,-.12,.19,.35,-.03,.4,-.13,.5,.46,-.15,-.12,.49,-.27,.78,.35,-.01,.1,.52,.11,-.01,.22,.57,-.09,.21,.79,.44,-.29,.43,.72,.31,.11,.43,.49,.15,.04,.35,-.09,.15,.75,-.14,.43,.33,.2,.33,.37,.29,-.14,.34,.78,.01,.24,-.18,.17,.6,.14,.3,.7,-.1,.22,.63,.66,.81,.73,.21,.65,.76,.71,.3,-.1,.05,.61,.1,.62,.06,.75,.59,.13,.29,.72,.34,.67,.52,.18,-.14,.57,.41,.44,.13,.5,.2,.41,.13,.69,.64,.46,.75,.15,.59,.05,-.16,.57,.42,-.22,.05,.72,.63,.58,.34,.31,.35,.7,.66,.77,-.07,-.23,.13,.05,-.01,.7,.11,.1,.57,.03,.48,.53,.34,.66,.66,-.18,.06,.6,.27,.42,.65,-.21,-.24,.55,.4,.48,.73,.3,.75,.16,.77,-.28,.55,-.17,-.01,0,.06,-.03,.27,.69,.2,.48,.23,.38,-.04,.05,.75,.59,.7,.6,.73,.17,0,-.03,.24,.24,0,-.19,.69,.49,.74,.32,.46,.16,-.04,.33,.24,.59,-.11,.09,.82,.79,.71,.72,-.06,.55,.41,.61,.31,-.38,.61,.15,-.4,.7,-.21,.69,-.2,.68,.65,.03,.81,-.17,.16,.27,.16,.05,.34,.35,-.1,-.03,.02,.29,-.05,-.09,.75,.79,.32,.02,.76,.41,.36,.72,.66,.8,.03,-.09,.23,.7,-.01,-.38,-.16,.16,.16,.07,.79,.72,.45,-.2,.69,.48,-.15,.28,-.05,.81,.54,.34,-.27,-.07,-.04,-.12,.16,.2,.66,.67,.51,-.18,.4,.24,.75,.1,.1,-.26,.08,.72,-.15,.63,.47,.7,.68,.07,.54,.42,.78,-.39,.29,-.21,.41,-.58,-.17,.02,-.62,-.11,-.13,-.09,-.04,-.28,.18,.59,.55,-.17,.75,.75,-.23,.59,-.31,-.44,-.49,-.11,.82,.77,.84,.63,-.09,.41,.55,.47,.52,.56,.37,.83,.79,.52,.59,.42,.37,-.1,.52,.71,.79,.2,-.14,-.16,.17,.74,.24,.54,.07,.47,.73,.77,.64,.72,.73,.81,-.01,.66,-.08,-.29,.7,.21,-.17,.11,.67,.66,.73,.47,.28,.7,.38,.67,.15,.02,.18,-.01,.11,.04,.53,-.21,.09,-.14,.79,-.24,.61,-.22,-.01,-.11,.12,-.26,-.06,.72,-.06,.21,.34,.31,.29,.72,-.25,-.24,-.2,0,.68,-.19,-.01,.63,.59,.29,-.11,.75,.17,.75,-.01,.77,.09,.46,.42,.06,.36,.2,.36,-.01,-.64,-.26,-.07,.68,.72,1,.51,-.24,-.01,.77,.43,.36,.15,-.14,-.14,.76,.74,-.03,.47,.76,.33,.4,.22,.8,.76,-.22,-.08,.36,.5,.51,.02,-.29,.49,.25,-.05,.04,.75,-.35,-.05,.74,.29,-.09,.64,.26,.08,-.12,.78,-.39,.51,.21,.04,-.08,-.09,.39,.43,-.02,.08,.33,.2,.73,.84,.64,.03,.56,.63,.8,.75,.76,-.02,.02,.42,.77,.2,.25,.05,-.14,.13,.75,.85,-.32,.61,-.19,.24,.7,.01,.21,.19,.13,-.37,-.15,-.07,.06,.67,.79,.46,.75,.41,.01,.41,.1,.18,-.01,-.16,.18,.52,.7,.12,-.3,-.66,.37,.54,.31,.8,.37,.82,.32,-.05,.6,-.68,.77,.89,.82,.19,.74,.34,.75,.59,.09,.46,.67,.72,.43,.78,.79,.58,.08,.78,.23,.47,-.13,.74,.78,.77,.74,.77,-.28,.83,.47,.16,-.52,.77,.13,.73,-.45,0,.79,.43,.78,.8,-.05,.07,.01,-.07,.82,.03,.75,.43,.72,.09,-.27,.11,-.15,-.04,.18,.25,-.16,.12,.81,.16,.04,.57];export{a as rvalData};
