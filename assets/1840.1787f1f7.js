const a=[.64,.47,.99,.07,.58,0,.81,0,0,.39,0,.7,.4,.3,.02,.78,.99,.22,.21,.36,.61,.03,.1,.35,0,.35,0,.31,.26,0,.31,.81,.05,.21,.05,.38,.77,.11,.62,.65,.67,.88,.09,.46,.88,.23,.29,.02,.17,0,.01,.53,.24,.71,0,0,0,.3,.04,.56,0,.3,.18,.57,.2,0,.17,.27,.53,.71,.71,.5,0,.04,.12,.92,.59,0,.85,.97,.9,.63,.31,.61,.4,.19,.12,.03,.94,.31,.08,.69,0,.09,.16,.04,.6,.17,.97,0,.19,.09,.08,.6,.01,.7,0,0,0,.27,.56,0,.72,.22,.05,.19,.76,.01,.02,0,.94,.1,0,.86,.19,0,.34,.5,0,.61,0,0,.17,0,.61,.14,0,.6,.02,.18,.37,.32,.54,.05,.58,.01,.4,.31,0,.14,.09,0,.64,.05,0,0,.01,.65,.87,.01,0,.12,.39,.07,0,0,.24,.11,0,.28,.7,.13,0,.04,.14,.14,.14,0,0,.64,.74,.8,.66,.02,.02,.18,.23,.92,0,.68,.68,0,.98,0,0,.02,.19,.01,.83,.6,.09,0,.4,.19,.98,0,.5,0,0,.33,0,.46,.29,.25,.34,.21,.98,0,.13,.24,.12,.11,.2,.44,.05,.55,0,.24,0,.86,.87,.5,.87,.92,.85,.58,.88,.1,.43,.81,0,.99,0,.01,0,0,.99,.17,.18,.87,0,.05,0,.01,.39,.82,.66,0,.59,.04,.37,.92,0,.42,.87,.02,.55,.31,.03,.57,.27,.69,.23,.42,.96,.47,0,0,.01,.12,0,0,.03,.18,0,0,.02,.35,.08,.64,0,0,.05,0,0,.12,0,.7,.01,.02,.03,.83,.58,.77,.45,.44,.01,.02,.38,0,.85,.84,.22,.86,.24,.02,.2,.13,.76,.09,.58,.65,.24,.37,.03,.02,.15,.01,0,.03,.74,.14,.15,.31,0,.15,0,0,0,.01,0,.63,.79,.79,.91,.31,.7,.01,.04,.04,.01,.06,.12,.02,.5,.01,.13,.25,.12,.11,.07,.31,.12,.03,.38,.5,.27,.6,.1,.09,.01,.31,.04,0,0,.01,.83,.58,.73,.02,.82,.22,.38,.48,.11,.04,.73,.4,.02,.11,.01,.56,.9,0,0,.78,.17,.71,0,.09,.08,.34,.08,0,0,.86,.71,.04,.14,.78,.67,.2,.91,.01,.04,.71,.49,.95,0,.36,.03,.24,.03,.65,.3,.9,.5,.43,.07,.01,0,0,0,.08,.01,.22,0,.09,.74,0,.1,.68,.78,.59,.05,0,.84,.06,.05,.02,0,.01,.08,.37,.81,.39,.09,.88,.03,0,.78,.01,.59,0,.08,0,.06,.03,.22,.51,.01,.95,.33,.65,.01,0,0,0,.08,0,.03,.64,.85,0,.14,.18,0,.06,.62,.79,.34,.94,0,.78,.62,.47,.18,.96,0,0,.01,.02,.09,.49,.72,.67,.3,0,.78,0,.02,.33,.93,.21,.04,.01,0,0,0,.93,.11,.8,0,.45,.07,.84,.35,.93,.12,0,0,.21,.88,.02,.63,.1,.01,0,.5,.86,.35,.11,.41,0,.18,.9,.35,0,.94,.02,0,.55,.27,.56,.04,.91,.11,.14,.01,.21,.46,.01,.93,0,.41,.89,.64,.78,0,.32,.57,.8,0,.01,.56,.56,.24,.24,.01,.28,.34,.58,.22,.16,0,.9,.65,.3,.02,.97,.79,.17,.61,.31,0,.06,0,.5,.05,0,0,.38,.8,0,.72,0,0,.04,.46,0,.19,.94,.68,0,.79,.29,.86,0,.01,.94,0,.04,0,.37,.02,.58,.04,.26,.17,0,.44,.57,.2,0,0,0,0,0,0,.16,.37,.3,.57,.23,.43,.28,.73,.78,.73,0,.1,.02,0,.42,0,.03,.95,.38,.21,.08,.7,.18,.75,.11,.31,.41,.29,.3,.01,.57,0,.73,.4,0,.03,.02,.02,.4,.15,.58,.17,.92,.17,.32,0,.24,.39,.76,0,0,.62,.46,.86,.51,.26,0,.27,.14,.51,.99,.39,0,0,.96,.07,.77,.52,.62,.55,.01,0,0,.26,0,.55,.42,0,.04,.75,.61,0,.13,.66,.49,.84,.39,.26,.3,.33,.89,.29,0,.09,.61,0,0,.67,.38,.3,.48,.03,0,.33,0,.94,.55,.04,.81,.14,.01,.77,.21,.24,.85,.43,0,.12,0,.04,.73,.25,.01,0,0,.01,.43,.38,.96,.6,.32,.79,.69,.77,.49,.01,.62,0,0,.85,.07,.88,.09,.37,.79,.57,.03,.03,0,.16,.92,.02,.29,.03,.49,.36,.07,.53,.75,.96,.07,0,.68,.01,.12,.55,.08,0,.7,.43,.99,.44,.1,.13,.08,.21,0,.2,.01,.03,.83,.27,.1,0,.42,.49,.91,.59,0,.13,.71,.55,.47,.79,.23,.74,.16,.71,0,.97,.31,0,.43,.37,0,.75,.54,.02,.41,0,.9,.1,.02,.01,.23,.91,.05,.2,.21,0,.09,0,.9,.09,.67,.58,.28,.05,.07,.34,0,.12,.08,.37,.01,.09,.26,.12,0,.47,.29,0,0,.08,.82,.84,.19,0,.04,.24,0,.9,.91,.79,0,.98,.27,.73,.25,.86,.07,0,.31,.68,.98,.88,0,.32,0,.37,0,.52,0,.33,.75,.68,0,.29,0,0,.42,.02,.83,.42,.68,.2,.64,.36,.67,.96,.28,0,.54,.81,.63,.54,.27,0,.17,.16,.87,.43,.13,.09,.79,.43,.2,0,.02,.92,.05,0,.02,.58,.05,0,.61,.66,.05,1,0,0,.06,0,.18,.9,.79,.29,0,.68,.75,0,.41,.55,.14,.63,0,.02,.04,0,0,.58,0,0,0,0,0,.05,.95,.58,0,0,0,0,0,.77,.03,.63,.01,.66,.64,.47,.92,.64,.7,.25,.43,.39,.58,.09,.99,.45,0,0,0,0,.77,0,.56,.81,.21,.89,.14,.96,0,.65,.48,0,.09,.98,.26,0,.62,.09,.03,.58,0,.16,0,.87,.92,0,.96,0,.01,.56,.01,.43,.64,.22,.5,0,0,.69,0,.09,0,.01,.61,.15,0,0,.99,0,.35,.03,.23,.05,0,.98,.24,.04,.21,0,.64,.67,0,.75,0,.2,.72,.86,.63,.95,.67,0,0,.7,.88,.05,.02,.03,.14,.46,.99,.82,.34,0,.48,.01,.06,0,.2,.13,0,.86,.01,.12,.09,.01,.42,.15,0,0,.73,.03,.06,.71,.2,.06,.69,.63,.85,.14,.83,.94,.91,.98,.62,.47,.33,.17,.15,.84,.61,.02,.35,0,.28,.35,.04,.49,.44,.06,.02,.46,.74,.15,.2,.13,.29,.93,.96,.11,.52,.21,.14,.92,.01,.22,.64,0,0,.3,0,0,.06,.51,.89,.48,0,.04,.56,.07,.04,0,.2,.92,.52,.62,.67,0,.24,.02,.96,.12,.62,.41,.59,0,.7,.01,0,0,.04,.08,.1,.93,.07,.07,0,.24,0,.2,.11,.08,.06,.15,.81,.02,0,.31,0,.09,.09,.12,.73,.85,.59,.05,.19,.08,.75,0,.81,.67,.18,.78,0,.96,.73,0,.89,.02,.97,.29,0,.11,.5,.44,.72,.69,.82,.23,.9,.8,.66,.37,.65,.01,.56,.15,.36,.14,.28,.64,.1,.03,.01,0,.05,.69,.7,.04,0,0,.01,0,.06,0,.72,.78,.39,.02,.62,.49,0,.53,.89,0,.97,.07,.01,0,0,.01,.95,.76,.24,.96,.39,.51,.49,.39,0,.66,.01,.01,.14,.05,.03,0,0,.17,.28,.1,1,0,.04,.52,.22,.23,.99,.96,.48,.38,.24,.02,0,.97,.37,.23,.02,.15,.48,.06,.43,.12,.82,.13,0,.09,.08,.06,.34,0,.41,0,.41,.81,0,0,.73,.14,.65,0,.19,.66,0,.71,.44,0,0,0,0,.16,0,.07,0,.07,0,0,.02,.97,0,.01,0,0,0,.99,.79,.1,0,0,.01,.03,0,0,0,.12,0,.81,0,0,.36,0,0,.43,.81,0,0,.01,0,.12,0,.67,.06,0,.6,.79,.24,0,.71,.06,.94,0,.15,.71,0,0,.83,.02,.69,.06,.02,.46,.31,.36,.18,0,.43,0,.87,.21,.01,.01,.72,.46,.24,.46,.06,.04,.01,.05,.15,.9,.05,.63,.92,0,.03,.04,.81,0,.65,.97,0,.72,.18,.24,0,.83,.01,.37,0,.94,.01,.15,.17,.37,.47,.86,.43,.03,.29,0,0,.58,.08,.08,0,.01,.14,0,.05,.01,.11,0,0,0,.27,0,0,.99,.09,0,0,0,0,.58,.05,0,0,0,.13,.55,.88,.52,.13,.27,0,.06,0,.81,.04,0,0,.88,.01,.36,0,0,.67,.49,0,.76,.59,.6,.83,.1,.01,.38,.04,0,.02,.83,.87,.32,.59,.36,.02,.83,0,0,.01,0,.67,.27,0,0,.79,.04,0,.22,.01,.03,.07,.41,.22,.37,.71,.62,.02,.06,.22,.5,.15,.13,.09,.13,.88,.83,.09,.39,.39,.31,0,.1,.03,.45,.54,.31,.45,0,.13,.62,0,0,0,0,.28,.12,.36,0,.88,0,0,0,.01,.39,.01,.58,.94,.25,0,.1,0,.67,0,.16,0,.03,.97,.05,0,.53,.56,.98,0,.57,0,0,.72,.79,.49,0,0,.06,.1,0,.02,.15,.05,.49,0,.91,.12,.87,.27,.8,.42,.91,.05,0,.16,0,.99,0,.03,0,.1,0,.73,.99,.23,0,0,0,.76,.83,.35,.01,.44,.27,.69,.95,.05,.01,0,.04,.02,.91,.96,.53,.01,.24,.02,.55,0,0,0,.51,0,.24,0,.04,.62,.06,.99,.94,0,.28,.92,.01,0,.01,.01,.74,.67,0,0,.06,.07,0,.29,.57,.3,.17,.14,0,.38,.28,.01,.01,.52,.97,.51,.45,.51,.28,.29,.04,.8,.01,.06,.05,.73,.68,.11,.41,.39,.3,.1,0,.52,.95,0,0,.64,.51,.66,.38,0,.04,.41,.63,0,0,0,0,.09,.45,.07,.58,.42,0,.98,.87,.98,.24,.79,.72,.01,0,.05,0,.46,.5,.24,0,.04,0,.04,.1,.67,.55,.14,.7,.69,.03,.01,.84,.81,.7,.35,.57,0,0,.02,.67,.08,.83,.83,.02,.07,0,.98,0,0,.42,.01,0,.51,0,0,0,.03,.09,.01,.5,.24,.47,.04,.01,.13,.36,0,0,.08,0,.33,.13,.7,.98,.57,.17,.8,.03,.67,.03,0,.01,.53,.02,0,.02,0,.2,.14,.29,0,.75,.65,.91,.62,.42,.92,.24,0,.72,0,0,.1,.47,.43,0,.04,0,.03,.83,.39,.84,.34,.02,0,.3,.88,.49,0,.15,0,.24,0,.46,.02,.01,0,0,0,.52,.76,.57,.45,.65,0,0,0,.65,.03,.17,.56,.43,.41,.65,.16,.09,.01,.4,0,.15,.01,.85,0,.27,.55,.36,.03,.82,.73,.61,0,.99,.46,.21,.43,.19,.91,0,0,0,0,0,.02,.36,.02,.15,.67,.63,.92,.07,.09,.9,.01,.14,0,.01,.94,.16,.08,.07,.85,.24,.48,.28,.87,.13,0,.55,.15,.18,.15,.73,.71,.59,.42,.5,.42,.82,.82,.18,.34,.87,.08,.55,.04,.47,.8,.1,.2,.92,.21,0,.12,.42,0,.8,0,0,.43,.03,0,.4,0,.59,.84,.97,.87,.34,0,.83,0,0,.97,0,.89,.9,.04,.32,.03,0,.39,0,.3,.33,.45,.05,.49,.48,.09,0,.23,.78,.34,.92,.85,.38,.13,.26,.09,0,.74,.7,.05,0,.66,.86,.68,.46,.77,.06,.3,.02,.28,.91,.59,.55,.92,0,.06,.47,0,0,.75,.52,.87,0,.23,.22,.56,.7,.13,.08,.15,.04,0,.46,.62,.02,.03,.85,.06,0,.13,.56,.3,.41,0,.68,.85,.68,.27,.45,0];export{a as pvalData};
