const a=[0,.07,.59,.21,.06,.01,.01,.1,.18,.91,.56,.3,.02,.55,.79,.11,.95,.16,.02,.57,.8,.19,.68,.32,.31,0,.64,.39,0,.8,.35,.16,.35,.26,0,.21,.43,.55,0,.22,.13,0,.76,.28,.05,.38,.99,0,.45,.33,.38,.26,.42,.02,.63,.59,.31,.26,0,.02,.71,.03,0,.83,.05,.49,.01,.23,.54,.48,.61,.23,.95,.96,0,.6,.31,.7,.95,.77,.02,.05,.07,0,.31,.75,0,.44,.09,.06,.93,.07,.61,.02,.18,.02,.01,0,.7,.44,.58,.01,.43,.8,.1,.13,.18,0,.11,.07,.53,.76,.73,.02,.04,0,.62,.45,.09,.15,.02,.95,.02,.15,.62,.02,.05,.05,.36,.07,.53,.06,.15,.39,.06,.94,.4,.09,.43,.8,.02,.81,0,0,.2,.01,.25,.63,.01,.82,.02,.09,.25,.03,.84,.33,0,0,.05,.45,.13,.08,.12,.13,.74,.56,.96,.34,.22,.02,.02,.07,.74,.12,.04,.6,.64,.35,.77,.06,.74,.5,.83,.22,.13,.02,0,.01,.45,.04,.48,.4,.02,.32,.3,.4,.13,.83,0,.41,.08,.34,.1,0,.02,.3,.4,.72,.56,0,.69,.2,.44,.06,.35,.24,.34,.83,.94,.34,0,.09,.24,.04,0,.03,.37,.43,.66,.83,.71,.61,0,.32,0,.07,.18,.4,.2,.23,.79,.25,.72,.42,.45,.24,.2,.33,.96,.87,.53,.07,.86,.05,.05,0,1,.74,.17,.18,.35,.65,.91,.02,.72,.14,.95,0,.01,0,.26,0,.46,.32,.38,0,.2,.69,.4,.36,.51,.55,.22,.52,.14,.4,.85,.44,.98,.96,0,.08,.23,.42,.97,.59,.36,.06,.12,.35,.07,.17,.68,.63,.87,0,.66,.36,.51,.88,0,.63,.22,.22,.31,.22,.66,.47,.29,.92,0,.31,.34,0,.99,.05,.07,.05,.99,.02,.29,0,.07,.01,.13,.29,.97,.07,.11,.1,.35,.4,.43,.14,.07,.34,.39,.88,.23,.14,.03,.2,0,.05,.68,.41,.23,.55,.21,.32,0,.62,.02,0,.25,.45,.81,.09,.56,.17,.1,.28,.03,.51,.73,.27,0,0,.88,.93,.59,.66,.13,.25,.02,.43,.64,.23,.28,.17,.29,0,.54,.18,.13,.11,.02,.5,.15,.1,.7,.08,.53,.03,.61,.69,.31,.32,0,.02,.18,.54,.18,.21,.04,.02,.01,.05,.53,.1,.36,.01,.35,0,.01,.02,.63,.58,.13,.13,.81,.64,.21,.48,.52,.02,.58,.03,.02,.78,.06,0,0,.68,.84,.9,.16,.01,.28,0,.8,.58,.03,.03,.99,.31,.74,.14,.76,.62,.01,.3,0,.62,.53,.48,.9,.32,0,.06,.02,.17,.06,0,.95,.33,.92,.24,.69,.66,.1,.13,.15,.4,.95,.14,.92,.2,.09,.6,.94,.16,.06,.24,.65,0,.92,.65,.89,.41,.04,.02,.4,.04,0,.98,.79,.93,.13,.67,.08,.07,0,.18,.32,.34,0,.97,.33,0,.33,.45,.79,.38,.12,.03,.23,.6,.65,.56,.92,.75,.78,.65,.03,.08,.55,.93,.47,.74,.73,.32,0,.22,.07,.07,.34,.19,.12,0,.75,.04,.22,.71,.14,.04,.68,.88,.52,.69,.5,.66,.01,.95,.91,.71,.11,.68,.01,.77,.22,.18,.27,.37,.02,.15,.87,.27,.66,.21,.03,.01,.01,.15,.53,.06,.2,.01,.47,.4,.56,.86,.35,.14,.67,0,.23,.08,.91,.04,.98,.01,.19,.77,.34,.92,.5,.02,.47,0,.58,.88,.08,.2,.17,.03,.11,.16,.85,0,.63,.33,.53,.91,.44,0,.38,.81,.01,.49,.61,.01,.33,.5,.46,.58,.3,.26,.06,.66,.02,.01,.02,.07,.52,.02,.97,0,.01,.59,0,0,.82,.06,.42,.44,.37,.25,.05,.28,.22,.18,.07,.32,.33,.1,.98,.13,0,0,.01,.07,.26,.98,.96,.2,.02,0,.06,.1,.39,.23,.48,.08,.89,.15,.04,0,.04,.02,.58,.59,.37,0,.48,.53,0,0,.09,.07,0,.84,.23,.01,.22,.29,.4,.93,.06,.9,.04,.16,.29,.03,.1,.85,0,.35,.41,.75,.58,.05,.7,.45,0,.18,.03,.46,0,.01,.01,.92,.25,.67,.11,.66,.17,.69,.32,.52,.74,.75,.08,.19,.68,.02,.06,.58,.23,.04,0,.98,.24,.08,.55,.8,.25,.02,.65,.02,.16,.86,.07,.4,0,.02,.02,.1,.06,.41,.86,.6,.1,.11,.84,.01,.64,.11,.08,.36,.19,.77,.07,0,.54,.06,.06,.71,.12,.98,.48,.21,.59,.49,.01,.86,.12,0,.02,.9,.01,0,.3,.02,.26,0,.52,.01,.49,.44,.99,.65,.2,.09,0,.48,.98,.21,.41,.03,0,.06,.87,0,.31,.07,.03,.01,.67,.78,.77,.11,.07,.86,.03,.97,.18,.89,.03,.28,.34,.03,.01,.85,.01,.11,.02,.06,.18,.6,.12,.31,.16,.38,.93,.26,.24,.79,.73,.04,.3,.1,.06,.25,.2,.95,.47,0,.3,.52,.97,.34,.03,.96,.42,.49,0,.85,.38,.11,.84,.73,.97,0,.06,.36,.91,0,.14,.72,0,.15,.58,.08,.06,.31,.33,.11,.54,.01,.09,.48,.08,.1,.14,.24,.87,.83,.03,.76,.38,.17,.51,.4,.01,.46,0,.35,.61,.94,.89,.46,.98,0,.08,.06,.01,.03,.04,.68,.23,.91,.22,0,0,.31,.51,.86,.92,0,0,.87,.29,0,.35,.78,.39,.86,.3,.36,.43,.42,.06,.65,.92,.29,.01,.81,0,.03,.04,.62,.92,.31,.03,.97,.94,0,.76,.39,0,.01,.84,.09,0,.69,.27,.54,.86,.54,0,.65,.83,.52,.05,.76,.38,0,0,.7,.13,.31,.89,.89,.69,.91,.08,.1,.09,.27,.31,.61,.12,.51,.07,.48,0,.69,.39,.04,.36,.99,.59,.15,.3,.85,.56,.09,.32,.29,0,.83,.61,.54,.43,0,.56,.81,.11,.07,.91,.08,.76,.07,.28,.7,.07,.47,.14,.68,.47,.14,.05,.17,.07,.89,0,.33,.65,.06,.76,.57,.29,.03,0,.03,.05,.85,.67,.02,.52,0,.22,.01,.43,.16,.46,.09,.37,.03,.3,.45,.81,.44,.79,.23,.27,.24,.15,.01,.24,.67,.57,.85,.76,.01,.8,.06,.48,0,0,.17,.02,.55,.54,0,.79,.01,.01,.01,.03,.89,.33,0,.14,.11,.21,.82,.35,.93,.01,.84,.45,.83,.46,.37,.49,.06,.21,.01,.02,.11,0,.02,.46,.04,.33,.43,.81,.81,.84,.13,.03,.02,.22,.06,.03,.2,.15,.49,0,0,.78,.9,.02,.12,.01,.57,.97,.86,.02,.01,.71,.07,.77,.78,.21,.54,.01,.3,.64,.85,.39,.44,.08,.98,.01,.01,.11,.56,.19,0,.93,.05,.22,.68,.1,.6,.01,.16,.67,.63,.49,.77,.24,.23,.03,.15,0,.3,0,.01,.04,.05,.06,.03,.03,.03,.06,.53,.04,.84,0,.03,.05,.03,.75,.43,.12,.48,.29,.06,.12,.46,.49,.33,.6,0,.01,.04,.76,0,.61,.14,.18,.67,.06,.33,.48,.42,.81,.11,.11,.04,.14,.31,0,.78,0,.21,.14,0,.23,.68,.18,.44,0,.01,.08,.01,.01,0,.78,.62,.06,.15,0,.02,.11,.15,0,.11,.36,.55,.03,.85,.82,.8,.3,0,.01,.93,.09,.5,.44,.32,0,0,.6,.79,0,0,.72,.28,.15,.17,.15,.29,.17,0,.64,.02,0,.53,.06,.58,.84,.43,.05,.27,.02,.31,.23,.37,.6,.32,1,.39,.03,.28,.46,.3,.21,.5,.06,.92,.66,.75,.15,.8,.01,.07,0,.33,.66,.04,.18,0,.45,.61,.25,.19,.06,.03,0,.56,.29,.06,.23,.46,.93,0,.23,.47,.07,.26,.29,.15,.01,.88,.43,.93,.45,.34,0,.85,.8,.65,.23,.41,.55,.28,0,.08,.24,.12,.35,.8,.01,.46,0,.06,.03,.13,.09,.01,.07,.04,.59,.04,.91,.01,.09,.33,.02,.09,.03,.27,.43,.03,.12,.93,.33,.19,.15,.05,.35,.94,.18,.9,.86,.92,.15,.56,.05,.19,.38,.91,.46,.05,.47,.11,.52,.15,.99,.27,.74,.79,.12,.41,.19,.02,.09,.85,.03,.88,.88,.12,.13,.04,.1,.6,0,.44,0,0,.09,0,.11,.03,.24,.79,.07,0,.33,.22,.62,.87,.01,.35,0,.13,.56,.18,0,.01,.36,.86,.27,.33,.23,.88,.24,.57,.9,.03,.93,.53,.4,.38,.89,.12,.03,.18,.31,0,.1,.99,.33,.59,.23,.98,.2,.11,.16,.01,.17,.01,.81,.92,.15,.56,.93,.68,.53,0,.98,.73,.27,.72,.2,.18,.01,.92,.31,.47,.03,.01,.2,.46,.1,0,.49,.94,.3,.04,0,.63,.57,.95,.6,.51,.09,.15,.26,.11,.03,.69,.82,.72,.56,.04,.33,.04,.21,.29,.7,.45,.07,.24,.21,.56,.19,.06,.53,.01,.6,.3,.06,.52,0,.01,0,.12,.15,.33,0,.7,.06,.04,.77,.12,.03,0,.04,.39,.01,1,.34,.64,.12,.17,.15,0,.08,.94,.76,.95,.28,.36,.04,.73,.16,.22,.25,.8,.36,0,.21,.07,0,.49,.23,.33,0,.77,.44,.74,.66,.32,.91,.02,.01,.98,.03,.39,.24,.22,.7,.7,.35,.5,.42,0,.01,.16,.16,0,.84,.01,0,.03,.42,.95,.01,.81,.39,.43,.65,0,.23,.98,.37,.2,.33,.82,.39,.15,.2,0,.22,0,.27,.49,.05,.16,.53,.99,.36,0,.33,0,.64,.08,.44,.45,.85,.19,0,.45,.9,.13,.11,.54,.22,.48,.17,.93,.17,.4,.51,.01,.01,.1,.01,.8,.24,.29,.71,.27,0,.01,.21,.18,.93,.93,.29,.37,.55,.9,.02,.81,.2,.77,.55,.02,.25,.59,.09,.03,.93,.6,.09,0,.01,.55,.57,.27,0,.26,.86,.98,.64,.86,.78,.1,.42,.83,.82,.09,.55,.91,.04,.77,.03,.78,.5,.04,.11,.13,.82,.23,.97,.46,.23,.7,.39,.2,.48,.04,.01,.59,.11,.06,.2,.66,.43,.01,.46,.1,.57,.04,.58,.02,.89,.82,.78,.01,.3,.4,.58,.74,.02,.63,.25,.67,.54,.05,.71,.94,.21,0,.23,.77,.23,.27,.96,.34,.2,.03,.09,0,.13,.64,.44,.06,.77,.96,.04,.41,.08,.24,.04,.64,.94,.02,.3,.21,0,.4,.97,.97,.02,.86,0,.14,.73,0,.17,.25,.01,.54,.15,.02,.14,.89,.36,.16,.02,.98,.29,.35,.32,.46,.3,.35,.31,.06,.46,.68,.2,.76,.1,.88,.14,.25,.04,.53,.01,.11,0,.04,.17,.13,0,.28,0,.84,.66,.78,.12,.51,.48,.17,.09,0,0,0,.01,0,.75,.15,.04,.21,.43,.19,.12,.01,0,.34,0,.34,.08,.17,.39,.39,.05,.54,.23,.15,.17,.74,.3,0,.11,.07,.2,.49,.16,.19,0,.5,.03,.25,.96,0,0,.31,0,.98,0,.02,.39,.36,.03,0,.84,.54,.72,.95,.2,.84,.93,.16,.99,.93,.12,.16,.84,.14,0,.8,.26,.13,.17,0,.83,.03,0,.36,.67,.91,.19,.01,.07,.83,.1,.07,.65,.93,.28,.02,.72,.06,.79,.25,.04,0,.02,0,.4,.63,0,.35,.04,.24,.07,.74,.01,.04,.07,0,.62,.1,.12,.18,.25,0,.8,.39,.01,.14,.37,.03,.04,0,.17,.48,.01,.02,.75,.28,.04,.14,.93,.01,.03,.16,0,.03,.09,.61,.23,.2,.69,0,.7,.19,.2,0,0,.09,.02,0,.01,.03,.02,.12,.45,.01,.96,0,.89,.12,0,.4,.08,.15,.77,.06,.61,.09,0,0,.02,0,.17,.04,.77,.69,.38,.01,.05,.31,.05,.24,.04,.33,0,.02,.4,.63,.47,.15,.1,.15,.96,.4,0,.21,.85,.58,.04,.18,.01,0,.75,.58,.08,.03,.15,.72];export{a as pvalData};
